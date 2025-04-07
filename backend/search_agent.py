from fastapi import FastAPI, Request, HTTPException
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from uagents_core.identity import Identity
from fetchai.registration import register_with_agentverse
from fetchai.communication import parse_message_from_agent, send_message_to_agent
from fetchai import fetch
from uagents import Model
import logging
import os
from dotenv import load_dotenv
import openai
import json


class RequestFinance(Model):
    question: str
    address: str


class WeatherForecastRequest(Model):
    location: str


class Message(Model):
    message: str


# Load environment variables
load_dotenv()
client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Initialize logger
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

functions = [
    {
        "name": "get_weather",
        "description": "Retrieve weather information for a specified location.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The name of the city to get weather information for.",
                }
            },
            "required": ["location"],
        },
    },
    {
        "name": "get_finance_info",
        "description": "Provide financial analysis based on a given query.",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "The financial question to be analyzed.",
                }
            },
            "required": ["query"],
        },
    },
    {
        "name": "manage_schedule",
        "description": "Manage calendar events based on user commands.",
        "parameters": {
            "type": "object",
            "properties": {
                "command": {
                    "type": "string",
                    "description": "Just copy what the user query is, but make it more complete if needed.",
                }
            },
            "required": ["command"],
        },
    },
]


def determine_intent_and_payload(user_query: str):
    response = client.chat.completions.create(
        model="gpt-4o-mini-2024-07-18",
        messages=[{"role": "user", "content": user_query}],
        tools=[{"type": "function", "function": fn} for fn in functions],
        tool_choice="auto",
    )

    message = response.choices[0].message
    tool_call = message.tool_calls[0] if message.tool_calls else None

    if tool_call:
        function_name = tool_call.function.name
        arguments = json.loads(tool_call.function.arguments)
        return function_name, arguments
    else:
        return None, None


FINANCE_AGENT_ADDRESS = (
    "agent1q039gt7d5egjaz4mn9vmf3xncl367lrur78c3364caqmlsvn7th9unkrzh7"
)
WEATHER_AGENT_ADDRESS = (
    "agent1qfegw373x26x6x7max3fsz30ns0u407huram7vccz78slp3td03g5l9d74m"
)
SCHEDULER_AGENT_ADDRESS = (
    "agent1qgjg89v0hmfelmre6lt9svv8wpalc9amppkw54ksrv7g974jt2pvkd85xa5"
)


class PrimaryAgent:
    def __init__(self):
        self.identity = None
        self.latest_response = None

    def initialize(self):
        try:
            # Initialize agent identity
            self.identity = Identity.from_seed(os.getenv("PRIMARY_AGENT_KEY"), 0)

            # Register with Agentverse
            register_with_agentverse(
                identity=self.identity,
                url="http://localhost:5001/webhook",
                agentverse_token=os.getenv("AGENTVERSE_API_KEY"),
                agent_title="Financial Query Router",
                readme="<description>Routes queries to Financial Analysis Agent</description>",
            )
        except Exception as e:
            logger.error(f"Initialization error: {e}")
            raise

    def find_financial_agents(self):
        """Find registered financial analysis agent"""
        try:
            # Search for financial agent in Agentverse
            available_ais = fetch.ai("Financial Analysis Agent")
            agents = available_ais.get("ais", [])[:3]

            if agents:
                logger.info(f"Found financial agents")
                return agents
            return None

        except Exception as e:
            logger.error(f"Error finding financial agent: {e}")
            return None


primary_agent = PrimaryAgent()


@app.post("/api/send-request")
async def send_request(request: Request):
    try:
        # Extract user query
        data = await request.json()
        question = data.get("question")

        func, args = determine_intent_and_payload(question)

        if func == "get_weather":
            model_digest = Model.build_schema_digest(WeatherForecastRequest)

            logger.info(f"Sending request to weather agent: {args['location']}")
            payload = {"location": args["location"]}

            send_message_to_agent(
                primary_agent.identity,
                WEATHER_AGENT_ADDRESS,
                payload=payload,
                model_digest=model_digest,
            )
        elif func == "get_finance_info":
            # Use the search function to find financial agents
            agents = primary_agent.find_financial_agents()
            if not agents:
                raise HTTPException(
                    status_code=404,
                    detail="Financial analysis agents not available",
                )

            for agent in agents:
                logger.info(
                    f"Sending request to agent: {agent['name']} at {agent['address']}"
                )
                payload = {"question": args["query"], "address": agent["address"]}
                logger.info(f"Payload: {payload}")
                model_digest = Model.build_schema_digest(RequestFinance)
                try:
                    # Forward request to financial agent
                    send_message_to_agent(
                        primary_agent.identity,
                        FINANCE_AGENT_ADDRESS,
                        payload=payload,
                        model_digest=model_digest,
                    )
                except Exception as e:
                    logger.error(
                        f"Failed to send message to agent {agent['address']}: {e}"
                    )
                    continue
        elif func == "manage_schedule":
            model_digest = Model.build_schema_digest(Message)

            logger.info(f"Sending request to scheduler agent: {args['command']}")
            payload = {"message": args["command"]}

            send_message_to_agent(
                primary_agent.identity,
                SCHEDULER_AGENT_ADDRESS,
                payload=payload,
                model_digest=model_digest,
            )
        else:
            return {"status": "failed", "response": "Unable to determine intent."}

        return {"status": "success", "response": "Request sent successfully."}

    except Exception as e:
        logger.error(f"Error processing request: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/webhook")
async def webhook(request: Request):
    try:
        # Parse incoming agent message
        data = await request.body()
        message = parse_message_from_agent(data.decode("utf-8"))

        # Store response for polling
        primary_agent.latest_response = message.payload

        return {"status": "success"}

    except Exception as e:
        logger.error(f"Error in webhook: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/get-response")
async def get_response():
    try:
        if primary_agent.latest_response:
            response = primary_agent.latest_response
            primary_agent.latest_response = None
            return {"status": "success", "response": response}
        return {"status": "pending", "response": "No response yet."}
    except Exception as e:
        logger.error(f"Error getting response: {e}")
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    primary_agent.initialize()
    uvicorn.run(app, host="0.0.0.0", port=5001)
