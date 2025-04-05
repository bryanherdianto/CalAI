from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import getpass
import os

load_dotenv()

if "OPENAI_API_KEY" not in os.environ:
    os.environ["OPENAI_API_KEY"] = getpass.getpass("Enter your OpenAI API key: ")

# Initialize the OpenAI model using LangChain
llm = ChatOpenAI(
    model="gpt-4o-mini-2024-07-18",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
)

messages = [
    (
        "system",
        "You are a helpful translator. Translate the user sentence to French.",
    ),
    ("human", "I love programming."),
]
print(llm.invoke(messages))
