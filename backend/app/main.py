"""
FastAPI application entrypoint.

Wires together the API routers, the LangGraph agent graph, and the
WebSocket live-stream endpoint used by the frontend and Chainlit console.
"""

from fastapi import FastAPI

app = FastAPI(title="Mini-Devin Backend")


@app.get("/health")
async def health() -> dict:
    return {"status": "ok"}
