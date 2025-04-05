import os
import dateparser
import datetime as dt
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import re
import json

def extract_json_from_response(text):
    # Remove markdown code block formatting if it exists
    match = re.search(r"```(?:json)?(.*?)```", text, re.DOTALL)
    json_str = match.group(1).strip() if match else text.strip()
    return json.loads(json_str)


# Load .env
load_dotenv()
SCOPES = ["https://www.googleapis.com/auth/calendar"]
# llm = ChatOpenAI(model_name="gpt-4o-mini-2024-07-18", temperature=0.3)
llm = ChatOpenAI(model_name="gpt-4o", temperature=0.3)


def get_calendar_service():
    creds = None
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
            creds = flow.run_local_server(port=0)
        with open("token.json", "w") as token:
            token.write(creds.to_json())
    return build("calendar", "v3", credentials=creds)


def get_intent_from_query(query: str) -> str:
    system_message = (
        "You are an assistant for a calendar app. "
        "Decide if the user wants to 'read' (view events) or 'write' (create a new event). "
        "Reply with just 'read' or 'write'."
    )
    response = llm.invoke([
        HumanMessage(content=system_message),
        HumanMessage(content=query)
    ])
    return response.content.strip().lower()


def extract_event_info(query: str):
    today = dt.datetime.now().strftime("%A, %Y-%m-%d")

    system_message = (
        f"You are helping extract structured information to create a calendar event. Today is {today}."
        "If the user specifies a recurring event (e.g., 'from Monday to Friday'), return one item for each day. "
        "From the user message, extract:\n"
        "- title (or guess one)\n"
        "- start_datetime (ISO format)\n"
        "- end_datetime (ISO format, assume 1 hour after start unless user says otherwise)\n"
        "- timeZone (assume America/Los_Angeles if not given)\n"
        "Return this as JSON keys: title, start, end, timeZone."
    )
    response = llm.invoke([
        HumanMessage(content=system_message),
        HumanMessage(content=query)
    ])
    return extract_json_from_response(response.content)


def extract_read_range(query: str):
    today = dt.datetime.now().strftime("%A, %Y-%m-%d")

    system_message = (
        f"You are extracting a time range to read events from a calendar. Today is {today}."
        "Extract:\n"
        "- start_date (ISO format)\n"
        "- end_date (ISO format)\n"
        "Assume 'now' as today if not specified. Return as JSON."
    )
    response = llm.invoke([
        HumanMessage(content=system_message),
        HumanMessage(content=query)
    ])
    return extract_json_from_response(response.content)


def read_events(service, user_query):
    date_info = extract_read_range(user_query)
    start = dateparser.parse(date_info['start_date'])
    end = dateparser.parse(date_info['end_date'])

    if not start or not end:
        return "Couldn't parse the date range."

    time_min = start.isoformat() + "Z"
    time_max = end.isoformat() + "Z"

    events_result = (
        service.events()
        .list(
            calendarId="primary",
            timeMin=time_min,
            timeMax=time_max,
            singleEvents=True,
            orderBy="startTime",
        )
        .execute()
    )
    events = events_result.get("items", [])
    if not events:
        return "No events found in that range."
    result = f"\n📆 Events from {start.date()} to {end.date()}:\n"
    for event in events:
        start_time = event["start"].get("dateTime", event["start"].get("date"))
        result += f"- {start_time}: {event['summary']}\n"
    return result


def write_event(service, user_query):
    try:
        info = extract_event_info(user_query)

        # Normalize to a list (whether single dict or list of dicts)
        events = info if isinstance(info, list) else [info]

        created_links = []

        for event in events:
            event_payload = {
                "summary": event["title"],
                "start": {
                    "dateTime": event["start"],
                    "timeZone": event.get("timeZone", "America/Los_Angeles"),
                },
                "end": {
                    "dateTime": event["end"],
                    "timeZone": event.get("timeZone", "America/Los_Angeles"),
                },
            }

            created_event = service.events().insert(calendarId="primary", body=event_payload).execute()
            link = created_event.get("htmlLink", "")
            created_links.append(f"✅ Created: {event['title']} on {event['start']} → [Link]({link})")

        return "\n".join(created_links)

    except Exception as e:
        return f"❌ Failed to create event(s): {e}"


def main():
    service = get_calendar_service()

    while True:
        user_input = input("\n🧑 You: ")

        if user_input.lower() in ("exit", "quit"):
            print("👋 Goodbye!")
            break

        intent = get_intent_from_query(user_input)
        print(f"🤖 Intent detected: {intent}")

        try:
            if intent == "read":
                print("📅 Checking calendar...")
                print(read_events(service, user_input))
            elif intent == "write":
                print("📝 Creating your event...")
                print(write_event(service, user_input))
            else:
                print("🤔 Sorry, I couldn't understand your intent.")
        except HttpError as e:
            print(f"❌ Google Calendar API error: {e}")

if __name__ == "__main__":
    main()