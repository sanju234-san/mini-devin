"""
Chainlit Live Agent Console (Task 11).

Complements the Next.js Live Console by providing a lightweight, real-time
observation view that streams agent execution events directly from the backend
WebSocket interface.

Architectural Boundaries & Ownership:
- Owned by: Nikunj Nanda (Frontend / UI scope)
- Data Source: Backend WebSocket (/ws/runs/{run_id}) per docs/api-contract.md §4
- Envelope Schema: docs/design/schemas.md §4 & frontend/src/hooks/types.ts
- Dependencies: chainlit, websockets (owned by Tamanna in requirements.txt)
"""

from __future__ import annotations

import asyncio
import json
import os
import sys
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

# Defensive import to allow syntax compilation and diagnostic execution
# even when chainlit or websockets have not yet been installed by Tamanna.
try:
    import chainlit as cl
except ImportError:
    cl = None

try:
    import websockets
except ImportError:
    websockets = None

# -----------------------------------------------------------------------------
# Configuration & Contract Paths
# -----------------------------------------------------------------------------

def get_backend_url() -> str:
    """Reads backend URL from project standard environment variables."""
    return (
        os.getenv("BACKEND_URL")
        or os.getenv("API_BASE_URL")
        or os.getenv("NEXT_PUBLIC_API_URL")
        or "http://localhost:8000"
    ).rstrip("/")


def get_websocket_uri(run_id: Optional[str] = None) -> str:
    """
    Derives WebSocket URI from HTTP base URL.
    Mirrors frontend/src/hooks/useAgentRunSocket.ts:getWebSocketUri.
    """
    http_base = get_backend_url()
    ws_base = http_base.replace("https://", "wss://").replace("http://", "ws://")
    path = f"/ws/runs/{run_id}" if run_id else "/ws/runs"
    return f"{ws_base}{path}"


DEFAULT_RUN_ID = os.getenv("MINI_DEVIN_RUN_ID", "run-8924a")
DEFAULT_REPO = os.getenv("MINI_DEVIN_REPO", "octocat/linguist")
DEFAULT_ISSUE = os.getenv("MINI_DEVIN_ISSUE", "#482: UTF-8 multibyte parser bug")

PIPELINE_STAGES = [
    {"num": 1, "name": "Triage", "key": "triage"},
    {"num": 2, "name": "Retrieval", "key": "retrieval"},
    {"num": 3, "name": "Planner", "key": "planner"},
    {"num": 4, "name": "Gate", "key": "gate"},
    {"num": 5, "name": "Coder", "key": "coder"},
    {"num": 6, "name": "Test-Runner", "key": "test_runner"},
    {"num": 7, "name": "Debugger", "key": "debugger"},
    {"num": 8, "name": "PR Agent", "key": "pr_agent"},
]

# -----------------------------------------------------------------------------
# Quarantined Illustrative Demo Events (strictly separated from runtime data)
# Matches Stitch Task 11 visual design specification and liveConsoleUtils.ts
# -----------------------------------------------------------------------------

ILLUSTRATIVE_DEMO_EVENTS: List[Dict[str, Any]] = [
    {
        "id": "evt-104210",
        "timestamp": "10:41:10.104",
        "agent": "System",
        "step": "0.1",
        "event_type": "started",
        "badge": "INFO",
        "message": "Issue #482 received from GitHub webhook: 'UTF-8 multibyte parser bug in tokenizer.c'",
        "payload": {
            "issue_id": 482,
            "repo": "octocat/linguist",
            "sender": "webhook",
            "action": "opened",
        },
    },
    {
        "id": "evt-104214",
        "timestamp": "10:41:14.320",
        "agent": "Triage",
        "step": "1.1",
        "event_type": "completed",
        "badge": "SUCCESS",
        "message": "Triage completed: labeled ['bug', 'ruby', 'parser-ast'] (Confidence: 0.98)",
        "payload": {
            "labels": ["bug", "ruby", "parser-ast"],
            "confidence": 0.98,
            "complexity_estimate": "medium",
        },
    },
    {
        "id": "evt-104218",
        "timestamp": "10:41:18.892",
        "agent": "Retrieval",
        "step": "2.1",
        "event_type": "tool_call",
        "badge": "INFO",
        "tool_name": "ast_grep",
        "message": "AST grep located 3 occurrences of scan(/\\w+|\\S/) in lib/linguist/tokenizer.rb",
        "payload": {
            "tool": "ast_grep",
            "query": "scan(/\\w+|\\S/)",
            "target_path": "lib/linguist/tokenizer.rb",
            "matches_found": 3,
        },
    },
    {
        "id": "evt-104224",
        "timestamp": "10:41:24.018",
        "agent": "Planner",
        "step": "3.1",
        "event_type": "completed",
        "badge": "PLAN",
        "message": "Synthesized implementation_plan_v2.md with 3 execution phases",
        "payload": {
            "plan_version_id": "v2",
            "phases": 3,
            "affected_files": ["ext/linguist/tokenizer.c", "test/test_tokenizer.rb"],
            "requirements": ["R1: UTF-8 stride boundary", "R2: Test suite regression"],
        },
    },
    {
        "id": "evt-104235",
        "timestamp": "10:41:35.541",
        "agent": "Human Gate",
        "step": "4.1",
        "event_type": "paused",
        "badge": "APPROVAL",
        "message": "Plan verified by maintainer @octocat via GitHub App comment",
        "payload": {
            "decision": "approved",
            "approver": "@octocat",
            "plan_version": "v2",
            "timestamp": "10:41:35Z",
        },
    },
    {
        "id": "evt-104202",
        "timestamp": "10:42:02.112",
        "agent": "Coder",
        "step": "5.1",
        "event_type": "tool_call",
        "badge": "STEP",
        "tool_name": "patch_file",
        "message": "Code patch applied to ext/linguist/tokenizer.c (+42, -18 lines)",
        "payload": {
            "tool": "patch_file",
            "file": "ext/linguist/tokenizer.c",
            "diff_stat": "+42, -18",
            "requirement_id": "R1",
        },
    },
    {
        "id": "evt-104215",
        "timestamp": "10:42:15.820",
        "agent": "Test-Runner",
        "step": "6.1",
        "event_type": "started",
        "badge": "EXEC",
        "message": "Invoked containerized test runner sandbox-vm-e8a: bundle exec rake test...",
        "payload": {
            "command": "bundle exec rake test TEST=test/test_tokenizer.rb",
            "sandbox_container": "sandbox-vm-e8a",
            "timeout_seconds": 60,
        },
    },
    {
        "id": "evt-104218b",
        "timestamp": "10:42:18.234",
        "agent": "Test-Runner",
        "step": "6.2",
        "event_type": "retry",
        "badge": "WARN",
        "message": "Deprecated regexp flag /u ignored in modern Ruby 3.2 runtime context",
        "payload": {
            "warning_type": "deprecation",
            "runtime": "ruby-3.2",
            "source": "ext/linguist/tokenizer.c:18",
        },
    },
    {
        "id": "evt-104221",
        "timestamp": "10:42:21.402",
        "agent": "Test-Runner",
        "step": "6.3",
        "event_type": "failed",
        "badge": "ERROR",
        "message": "AssertionError: Tokenizer length mismatch: expected 148, got 146 in test_multibyte_utf8_boundary (EXIT CODE 1) at test/test_tokenizer.rb:42",
        "payload": {
            "event_id": "evt-104221-tr02",
            "run_id": "run-8924a",
            "agent": "test-runner",
            "sandbox_vm": "vm-e8a",
            "command": "rake test TEST=test/test_tokenizer.rb",
            "exit_code": 1,
            "test_suite": {
                "name": "TestTokenizer",
                "test_case": "test_multibyte_utf8_boundary",
                "expected": 148,
                "actual": 146,
            },
        },
    },
    {
        "id": "evt-104224b",
        "timestamp": "10:42:24.089",
        "agent": "Test-Runner",
        "step": "6.4",
        "event_type": "tool_call",
        "badge": "STEP",
        "tool_name": "package_trace",
        "message": "Packaging trace dump for Debugger Agent... Generating AST slice snaps...",
        "payload": {
            "tool": "package_trace",
            "target": "debugger_handoff",
            "trace_size_kb": 108,
        },
    },
    {
        "id": "evt-104225",
        "timestamp": "10:42:25.100",
        "agent": "Debugger",
        "step": "7.1",
        "event_type": "started",
        "badge": "STEP",
        "message": "Awaiting Debugger Agent response socket stream...",
        "payload": {
            "status": "awaiting_stream",
            "input_failure": "evt-104221",
            "stage": 7,
        },
    },
]

# -----------------------------------------------------------------------------
# Visual Presentation Helpers (Markdown Formatting)
# -----------------------------------------------------------------------------

def format_console_header(
    run_id: str,
    repo: str,
    issue: str,
    status: str,
    ws_uri: str,
) -> str:
    """Renders the top context header matching the Mini-Devin dark console design."""
    status_badge = {
        "CONNECTED": "[CONNECTED]",
        "CONNECTING": "[CONNECTING]",
        "DISCONNECTED": "[DISCONNECTED]",
        "ERROR": "[ERROR]",
        "DEMO": "[ILLUSTRATIVE PREVIEW]",
    }.get(status, f"[{status}]")

    return f"""### Mini-Devin > Live Console `v1.2`
**Repository**: `{repo}` | **Run ID**: `#{run_id}` | **Target**: `{issue}`
**Connection**: **`{status_badge}`** (`{ws_uri}`)

---
"""


def format_stage_indicators(active_stage: int = 6) -> str:
    """Renders the 8-stage pipeline status badges."""
    stages = []
    for s in PIPELINE_STAGES:
        num = s["num"]
        name = s["name"]
        if num < active_stage:
            badge = f"[DONE] `{num}. {name}`"
        elif num == active_stage:
            badge = f"**[ACTIVE] `{num}. {name}`**"
        else:
            badge = f"[WAIT] `{num}. {name}`"
        stages.append(badge)

    line1 = " | ".join(stages[:4])
    line2 = " | ".join(stages[4:])
    return f"""**Pipeline Progression (8 Stages)**:
{line1}
{line2}

---
"""


def format_event_markdown(event: Dict[str, Any], is_demo: bool = False) -> str:
    """Formats an individual event envelope into a clean developer card."""
    timestamp = event.get("timestamp") or datetime.now(timezone.utc).strftime("%H:%M:%S.%f")[:-3]
    agent = event.get("agent", "Agent")
    badge = event.get("badge") or event.get("event_type", "INFO").upper()
    message = event.get("message", "")
    evt_id = event.get("id", "evt-unknown")

    tag_prefix = "[ILLUSTRATIVE PREVIEW] " if is_demo else ""

    md = f"{tag_prefix}`{timestamp}` **`[{badge}]`** **{agent}**: {message}\n"
    md += f"*(Event ID: `{evt_id}`)*\n"
    return md


# -----------------------------------------------------------------------------
# Chainlit Interactive Lifecycle
# -----------------------------------------------------------------------------

if cl is not None:

    @cl.on_chat_start
    async def on_chat_start() -> None:
        """Initializes the Chainlit Live Console session."""
        run_id = os.getenv("MINI_DEVIN_RUN_ID", DEFAULT_RUN_ID)
        repo = os.getenv("MINI_DEVIN_REPO", DEFAULT_REPO)
        issue = os.getenv("MINI_DEVIN_ISSUE", DEFAULT_ISSUE)
        ws_uri = get_websocket_uri(run_id)

        cl.user_session.set("run_id", run_id)
        cl.user_session.set("repo", repo)
        cl.user_session.set("issue", issue)
        cl.user_session.set("ws_uri", ws_uri)

        # 1. Header Banner
        header = format_console_header(run_id, repo, issue, "CONNECTING", ws_uri)
        stages = format_stage_indicators(active_stage=6)

        actions = [
            cl.Action(name="action_run_demo", label="▶ Run Illustrative Demo", value="demo"),
            cl.Action(name="action_connect_live", label="🔌 Retry Live Connection", value="connect"),
        ]

        await cl.Message(
            content=f"{header}\n{stages}\n*Attempting live WebSocket connection to backend...*",
            actions=actions,
        ).send()

        # 2. Probe Live WebSocket
        await attempt_live_connection(run_id, ws_uri)

    async def attempt_live_connection(run_id: str, ws_uri: str) -> None:
        """
        Attempts connection to the verified backend WebSocket endpoint.
        Reports honest disconnected status when unavailable.
        """
        if websockets is None:
            await cl.Message(
                content=(
                    f"### 🔴 Live Connection Status: `DISCONNECTED`\n\n"
                    f"> **Dependency Blocker (Tamanna)**: The `websockets` library is not installed in "
                    f"this Python environment (`chainlit_console/requirements.txt` is empty).\n\n"
                    f"Target Endpoint: `{ws_uri}`\n\n"
                    f"💡 **Preview Mode Available**: Click **`Run Illustrative Demo`** or type `/demo` "
                    f"to preview the 8-stage pipeline visualization with verified event schemas."
                )
            ).send()
            return

        try:
            # Short timeout to prevent hanging when backend route is not mounted
            async with websockets.connect(ws_uri, open_timeout=2.0) as ws:
                await cl.Message(
                    content=(
                        f"### 🟢 Live Connection Status: `CONNECTED`\n"
                        f"Subscribed to real-time agent stream at `{ws_uri}`.\n"
                        f"Streaming incoming agent step events..."
                    )
                ).send()

                async for raw_message in ws:
                    try:
                        envelope = json.loads(raw_message)
                        await render_live_event(envelope)
                    except json.JSONDecodeError:
                        await cl.Message(
                            content=f"⚠️ **Parse Error**: Received non-JSON WebSocket frame: `{str(raw_message)[:120]}`"
                        ).send()

        except Exception as exc:
            await cl.Message(
                content=(
                    f"### 🔴 Live Connection Status: `DISCONNECTED`\n\n"
                    f"> **Backend Blocker (Tamanna)**: Unable to connect to `{ws_uri}`.\n"
                    f"> Reason: `{exc.__class__.__name__}: {str(exc)}`\n\n"
                    f"As verified in `docs/api-contract.md` and `backend/app/websocket/live_stream.py`, "
                    f"the backend WebSocket endpoint is currently a stub pending implementation.\n\n"
                    f"💡 **Preview Mode Available**: Click **`Run Illustrative Demo`** or type `/demo` "
                    f"to inspect the console's event cards, step formatting, and pipeline hierarchy."
                )
            ).send()

    async def render_live_event(envelope: Dict[str, Any]) -> None:
        """Renders an authenticated live WebSocket event envelope."""
        agent = envelope.get("agent", "Agent")
        step_num = envelope.get("step", "1.0")
        event_type = envelope.get("event_type", envelope.get("eventType", "info")).lower()
        tool_name = envelope.get("tool_name", envelope.get("tool"))
        message = envelope.get("message", "")
        payload = envelope.get("payload", {})

        is_error = event_type in ("failed", "error")

        step_type = "tool" if (tool_name or "tool" in event_type) else "llm"
        step_title = f"{agent} (Step {step_num}) — {event_type.upper()}"

        async with cl.Step(name=step_title, type=step_type) as step:
            step.is_error = is_error
            step_content = format_event_markdown(envelope, is_demo=False)
            if payload:
                step_content += f"\n```json\n{json.dumps(payload, indent=2)}\n```"
            step.output = step_content

    async def run_illustrative_demo() -> None:
        """
        Executes the quarantined illustrative preview stream.
        Strictly labeled to ensure runtime data is never falsified.
        """
        banner = (
            "## 🟣 Quarantined Illustrative Demo Mode\n"
            "> ⚠️ **NOTICE**: The following stream uses verified offline sample events strictly "
            "to demonstrate UI formatting, badge styles, and step hierarchy. "
            "It is separate from live runtime telemetry.\n\n"
            "---"
        )
        await cl.Message(content=banner).send()

        for evt in ILLUSTRATIVE_DEMO_EVENTS:
            agent = evt["agent"]
            step_num = evt["step"]
            badge = evt["badge"]
            event_type = evt["event_type"]
            tool_name = evt.get("tool_name")
            payload = evt.get("payload", {})

            is_error = badge == "ERROR" or event_type == "failed"
            step_type = "tool" if tool_name else "llm"
            step_title = f"{agent} (Step {step_num}) — {badge}"

            async with cl.Step(name=step_title, type=step_type) as step:
                step.is_error = is_error
                content = format_event_markdown(evt, is_demo=True)
                if payload:
                    content += f"\n**Payload Details**:\n```json\n{json.dumps(payload, indent=2)}\n```"
                step.output = content

            # Short cadence to simulate streaming
            await asyncio.sleep(0.35)

        summary = (
            "### 🏁 Illustrative Stream Completed\n"
            "- **Events Streamed**: 11 preview envelopes\n"
            "- **Observed Pipeline Stages**: 1-7 (Triage through Debugger)\n"
            "- **Final State**: Awaiting Debugger Agent response socket stream\n\n"
            "*Use `/connect` to re-attempt live backend connection, or `/help` for options.*"
        )
        await cl.Message(content=summary).send()

    @cl.action_callback("action_run_demo")
    async def on_action_demo(action: cl.Action) -> None:
        """Handler for the Run Illustrative Demo action button."""
        await run_illustrative_demo()

    @cl.action_callback("action_connect_live")
    async def on_action_connect(action: cl.Action) -> None:
        """Handler for the Retry Live Connection action button."""
        run_id = cl.user_session.get("run_id", DEFAULT_RUN_ID)
        ws_uri = cl.user_session.get("ws_uri", get_websocket_uri(run_id))
        await attempt_live_connection(run_id, ws_uri)

    @cl.on_message
    async def on_message(message: cl.Message) -> None:
        """Command processor for the Live Console."""
        text = message.content.strip()

        if text == "/demo":
            await run_illustrative_demo()
        elif text.startswith("/connect"):
            parts = text.split()
            run_id = parts[1] if len(parts) > 1 else cl.user_session.get("run_id", DEFAULT_RUN_ID)
            ws_uri = get_websocket_uri(run_id)
            cl.user_session.set("run_id", run_id)
            cl.user_session.set("ws_uri", ws_uri)
            await cl.Message(content=f"Connecting to live run: `#{run_id}` at `{ws_uri}`...").send()
            await attempt_live_connection(run_id, ws_uri)
        elif text == "/status":
            run_id = cl.user_session.get("run_id", DEFAULT_RUN_ID)
            repo = cl.user_session.get("repo", DEFAULT_REPO)
            issue = cl.user_session.get("issue", DEFAULT_ISSUE)
            ws_uri = cl.user_session.get("ws_uri", get_websocket_uri(run_id))
            status_report = (
                f"### 📊 Console Status Diagnostics\n"
                f"- **Active Run**: `#{run_id}`\n"
                f"- **Repository**: `{repo}`\n"
                f"- **Target Issue**: `{issue}`\n"
                f"- **Target WebSocket**: `{ws_uri}`\n"
                f"- **Chainlit Installed**: `{'Yes' if cl is not None else 'No'}`\n"
                f"- **Websockets Installed**: `{'Yes' if websockets is not None else 'No'}`\n"
                f"- **Contract Schema**: `docs/design/schemas.md §4`\n"
            )
            await cl.Message(content=status_report).send()
        elif text == "/help":
            help_text = (
                f"### 💡 Mini-Devin Live Console Commands\n"
                f"- `/demo`: Runs the isolated 8-stage illustrative preview stream.\n"
                f"- `/connect [run_id]`: Connects to backend WebSocket for the specified run.\n"
                f"- `/status`: Displays connection parameters and dependency diagnostics.\n"
                f"- `/help`: Displays this assistance guide."
            )
            await cl.Message(content=help_text).send()
        else:
            await cl.Message(
                content=(
                    f"Command not recognized: `{text}`\n"
                    f"Available commands: `/demo` (illustrative preview), `/connect [run_id]`, `/status`, `/help`."
                )
            ).send()

else:
    # Diagnostic execution when run directly with python without chainlit installed
    def main() -> None:
        print("=" * 70)
        print("Mini-Devin Chainlit Live Console (chainlit_console/app.py)")
        print("=" * 70)
        print("Status: Standalone Diagnostic Mode")
        print(f"Default Target WebSocket: {get_websocket_uri(DEFAULT_RUN_ID)}")
        print(f"Backend HTTP URL:         {get_backend_url()}")
        print(f"Chainlit Installed:       {cl is not None}")
        print(f"Websockets Installed:     {websockets is not None}")
        print(f"Illustrative Demo Events: {len(ILLUSTRATIVE_DEMO_EVENTS)} registered")
        print("\nNote: 'chainlit' and 'websockets' are missing from chainlit_console/requirements.txt.")
        print("Tamanna must add these dependencies to enable 'chainlit run chainlit_console/app.py'.")
        print("=" * 70)

    if __name__ == "__main__":
        main()
