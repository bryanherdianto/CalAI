from uagents import Agent, Context, Model
from uagents.setup import fund_agent_if_low


class Message(Model):
    message: str


# Define the assistant agent
assistant = Agent(
    name="assistant-agent",
    port=8001,
    seed="assistant-secret-seed",
    endpoint=["http://127.0.0.1:8001/submit"],
)

RECIPIENT_ADDRESS = (
    "test-agent://agent1qgjg89v0hmfelmre6lt9svv8wpalc9amppkw54ksrv7g974jt2pvkd85xa5"
)

fund_agent_if_low(assistant.wallet.address())


@assistant.on_event("startup")
async def send_message(ctx: Context):
    msg = input("Enter your message: ")
    await ctx.send(RECIPIENT_ADDRESS, Message(message=msg))


@assistant.on_message(model=Message)
async def message_handler(ctx: Context, sender: str, msg: Message):
    ctx.logger.info(f"Received message from {sender}: {msg.message}")

    msg = input("Enter your message: ")
    await ctx.send(RECIPIENT_ADDRESS, Message(message=msg))


if __name__ == "__main__":
    assistant.run()
