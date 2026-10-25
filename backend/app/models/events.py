"""WebSocket event models for the Mini-Devin live run stream.

Plain-language overview
-----------------------
Every significant thing that happens during a run is broadcast as a
structured AgentEvent over the WebSocket connection. The dashboard and
Chainlit console receive these events and update the UI in real time.

Events carry only structured, action-level information:
  - Which agent is running and what step it is performing.
  - Whether a tool was called, succeeded, or failed (name and brief summary only).
  - Log lines (at a severity level).
  - Terminal output from the sandbox (stdout or stderr lines).
  - Notification that an artifact was stored.
  - Error notifications.

SECURITY RULE: No field on any model in this file may carry private
reasoning, chain-of-thought, scratchpad, or internal model deliberation.
"""

from __future__ import annotations

from datetime import datetime, timezone
from enum import Enum
from typing import Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, model_validator

from app.models.run import RunStatus


class EventType(str, Enum):
    """Category of a streaming event emitted during a run."""

    run_status = "run_status"
    agent_step = "agent_step"
    tool_call = "tool_call"
    log = "log"
    terminal_output = "terminal_output"
    artifact_created = "artifact_created"
    error = "error"


class ToolCallInfo(BaseModel):
    """Structured metadata about a single tool invocation."""

    name: str = Field(
        ...,
        max_length=100,
        description="Name of the tool that was called.",
    )
    state: Literal["started", "succeeded", "failed"] = Field(
        ...,
        description="Current state of the tool call.",
    )
    summary: str | None = Field(
        default=None,
        max_length=500,
        description="Short, redacted description of what the tool did or returned.",
    )


class AgentEvent(BaseModel):
    """A single structured event emitted during an agent run."""

    model_config = ConfigDict(extra="forbid")

    run_id: UUID = Field(
        ...,
        description="ID of the run this event belongs to.",
    )
    seq: int = Field(
        ...,
        ge=0,
        description="Monotonically increasing sequence number per run (0-based).",
    )
    ts: datetime = Field(
        ...,
        description="UTC timestamp when the event was emitted.",
    )
    type: EventType = Field(
        ...,
        description="Category of this event.",
    )

    agent: str | None = Field(
        default=None,
        description="Name of the agent that emitted the event.",
    )
    step: str | None = Field(
        default=None,
        description="Human-readable label of the workflow step being executed.",
    )
    status: RunStatus | None = Field(
        default=None,
        description="New overall run status. Present only for run_status events.",
    )
    tool: ToolCallInfo | None = Field(
        default=None,
        description="Tool invocation details. Present only for tool_call events.",
    )
    model_used: str | None = Field(
        default=None,
        description="Identifier of the model or classifier that handled this step.",
    )
    level: Literal["debug", "info", "warning", "error"] | None = Field(
        default=None,
        description="Log severity level. Present for log events.",
    )
    stream: Literal["stdout", "stderr"] | None = Field(
        default=None,
        description="Terminal stream source. Present for terminal_output events.",
    )
    message: str | None = Field(
        default=None,
        max_length=8192,
        description="Human-readable event message.",
    )
    artifact_id: UUID | None = Field(
        default=None,
        description="ID of the artifact that was stored.",
    )

    @model_validator(mode="after")
    def _validate_required_fields_per_type(self) -> "AgentEvent":
        """Enforce that each event type carries its required fields."""
        t = self.type

        if t == EventType.run_status:
            if self.status is None:
                raise ValueError("run_status events require the 'status' field.")

        elif t == EventType.agent_step:
            if self.agent is None:
                raise ValueError("agent_step events require the 'agent' field.")
            if self.step is None:
                raise ValueError("agent_step events require the 'step' field.")

        elif t == EventType.tool_call:
            if self.agent is None:
                raise ValueError("tool_call events require the 'agent' field.")
            if self.tool is None:
                raise ValueError("tool_call events require the 'tool' field.")

        elif t == EventType.log:
            if self.level is None:
                raise ValueError("log events require the 'level' field.")
            if self.message is None:
                raise ValueError("log events require the 'message' field.")

        elif t == EventType.terminal_output:
            if self.stream is None:
                raise ValueError("terminal_output events require the 'stream' field.")
            if self.message is None:
                raise ValueError("terminal_output events require the 'message' field.")

        elif t == EventType.artifact_created:
            if self.artifact_id is None:
                raise ValueError("artifact_created events require the 'artifact_id' field.")

        elif t == EventType.error:
            if self.message is None:
                raise ValueError("error events require the 'message' field.")

        if self.ts.tzinfo is None:
            raise ValueError("AgentEvent.ts must be timezone-aware.")

        return self
