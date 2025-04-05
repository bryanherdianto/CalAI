from uagents import Agent, Context, Model


class Message(Model):
    message: str


RECIPIENT_ADDRESS = (
    "test-agent://agent1q2kxet3vh0scsf0sm7y2erzz33cve6tv5uk63x64upw5g68kr0chkv7hw50"
)

alice = Agent(
    name="alice",
    port=8000,
    seed="alice secret phrase",
    endpoint=["http://127.0.0.1:8000/submit"],
)


@alice.on_event("startup")
async def send_message(ctx: Context):
    msg = input("Enter your message: ")
    await ctx.send(RECIPIENT_ADDRESS, Message(message=msg))


@alice.on_message(model=Message)
async def message_handler(ctx: Context, sender: str, msg: Message):
    ctx.logger.info(f"Received message from {sender}: {msg.message}")

    msg = input("Enter your message: ")
    await ctx.send(RECIPIENT_ADDRESS, Message(message=msg))


if __name__ == "__main__":
    alice.run()
