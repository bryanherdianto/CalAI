from uagents import Agent, Context, Model

WEATHER_SEED = "your_weather_agent_seed_here"


class WeatherForecastRequest(Model):
    location: str


class WeatherForecastResponse(Model):
    location: str
    temp: float
    condition: str
    humidity: float
    wind_speed: float


agent = Agent(name="weather_agent", seed=WEATHER_SEED, mailbox=True, port=8001)


@agent.on_message(model=WeatherForecastRequest)
async def handle_request(ctx: Context, sender: str, weather: WeatherForecastRequest):
    """Do something with the response."""
    ctx.logger.info(f"Received response from: {sender}: {weather.location}")
    await ctx.send(
        "agent1qtknkmesf5rsjqffsp5zm6vdd0kn0wkrappel4ze40meg3v2lkk4g9sp9u3", weather
    )


@agent.on_message(model=WeatherForecastResponse)
async def handle_response(ctx: Context, sender: str, response: WeatherForecastResponse):
    """Handle the response from the weather agent."""
    ctx.logger.info(
        f"Received response from {sender}: {response.temp}°C, {response.condition}, {response.humidity}%, {response.wind_speed} m/s"
    )
    await ctx.send(
        "agent1q0tu0hyp6tws9vx5qdncrz3k3yatxwe892cslfc43r6m2q67ez26v8njvgw", response
    )


if __name__ == "__main__":
    agent.run()
