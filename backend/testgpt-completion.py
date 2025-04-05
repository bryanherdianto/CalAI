from langchain_openai import OpenAI
from dotenv import load_dotenv
import getpass
import os

load_dotenv()

if "OPENAI_API_KEY" not in os.environ:
    os.environ["OPENAI_API_KEY"] = getpass.getpass("Enter your OpenAI API key: ")

# Initialize the OpenAI model using LangChain
llm = OpenAI(model_name="gpt-3.5-turbo-instruct")

print(llm.invoke("What is the capital of France?"))