from uagents import Agent, Context, Model

FINANCE_SEED = "your_finance_agent_seed_here"


class RequestFinance(Model):
    question: str
    address: str


class FinanceQA(Model):
    question: str


class Response(Model):
    text: str


agent = Agent(name="financial_agent", seed=FINANCE_SEED, mailbox=True, port=8000)


@agent.on_message(model=RequestFinance)
async def handle_request(ctx: Context, sender: str, question: RequestFinance):
    """Do something with the response."""
    ctx.logger.info(
        f"Received response from: {sender}: {question.question} and {question.address}"
    )
    await ctx.send(question.address, FinanceQA(question=question.question))


@agent.on_message(model=Response)
async def handle_response(ctx: Context, sender: str, response: Response):
    """Handle the response from the finance agent."""
    ctx.logger.info(f"Received response from {sender}: {response.text}")
    await ctx.send(
        "agent1q0tu0hyp6tws9vx5qdncrz3k3yatxwe892cslfc43r6m2q67ez26v8njvgw", response
    )


if __name__ == "__main__":
    agent.run()
