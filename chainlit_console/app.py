"""
Chainlit Live Agent Console for Mini-Devin.

Connects directly to Mini-Devin's LangGraph supervisor workflow, enabling
interactive issue submission, real-time step inspection, and human-in-the-loop
plan approval/rejection with persistent checkpoints.
"""

from __future__ import annotations

import logging
import re
import sys
import uuid
from pathlib import Path
from typing import Any, Optional

# Ensure the backend directory is strictly prioritized in sys.path and console_dir doesn't shadow 'app'
backend_dir = str(Path(__file__).resolve().parent.parent / "backend")
console_dir = str(Path(__file__).resolve().parent)
while backend_dir in sys.path:
    sys.path.remove(backend_dir)
while console_dir in sys.path:
    sys.path.remove(console_dir)
sys.path.insert(0, backend_dir)

# Ensure 'app' refers to backend/app package, not this file:
if "app" in sys.modules and not hasattr(sys.modules["app"], "__path__"):
    del sys.modules["app"]

# Python 3.14 compatibility patch for anyio / sniffio async loop and task detection
try:
    import asyncio
    import sniffio

    _orig_asyncio_current_task = asyncio.current_task
    def _safe_asyncio_current_task(loop=None):
        t = _orig_asyncio_current_task(loop)
        if t is not None:
            return t
        try:
            if loop is None:
                loop = asyncio.get_running_loop()
            tasks = [task for task in asyncio.all_tasks(loop) if not task.done()]
            if tasks:
                return tasks[-1]
        except Exception:
            pass
        return None
    asyncio.current_task = _safe_asyncio_current_task

    _orig_sniffio = sniffio.current_async_library
    def _patched_sniffio():
        try:
            asyncio.get_running_loop()
            return "asyncio"
        except RuntimeError:
            pass
        return _orig_sniffio()
    sniffio.current_async_library = _patched_sniffio

    import anyio._core._eventloop as _anyio_el
    _orig_anyio = _anyio_el.current_async_library
    def _patched_anyio():
        try:
            asyncio.get_running_loop()
            return "asyncio"
        except RuntimeError:
            pass
        return _orig_anyio()
    _anyio_el.current_async_library = _patched_anyio

    import anyio._backends._asyncio as _anyio_aio
    _anyio_aio.current_task = _safe_asyncio_current_task
except Exception as _patch_err:
    pass

import chainlit as cl
from langgraph.types import Command

from app.agents.checkpointer import get_checkpointer
from app.agents.graph import create_graph
from app.agents.schemas import create_initial_state, format_plan_as_markdown

logger = logging.getLogger(__name__)

# Pattern to recognize GitHub issue URLs
_GITHUB_ISSUE_RE = re.compile(
    r"^https?://github\.com/(?P<owner>[^/]+)/(?P<repo>[^/]+)/issues/(?P<number>\d+)/?$",
    re.IGNORECASE,
)


def parse_issue_input(text: str) -> tuple[str, str, str, Optional[str], Optional[int]]:
    """
    Parse user message into (repo, title, body, issue_url, issue_number).
    
    Supports:
    1. Full GitHub Issue URL: https://github.com/owner/repo/issues/123
    2. Format "owner/repo: Issue Title\nOptional Body"
    3. Plain text: defaults to local demo repository
    """
    raw = text.strip()
    match = _GITHUB_ISSUE_RE.match(raw)
    if match:
        owner = match.group("owner")
        repo_name = match.group("repo")
        issue_number = int(match.group("number"))
        repo = f"{owner}/{repo_name}"
        title = f"Fix defect reported in #{issue_number} for {repo}"
        body = f"Automated bug report imported from {raw}. Investigate and resolve defect."
        return repo, title, body, raw, issue_number

    lines = raw.split("\n", 1)
    first_line = lines[0].strip()
    body = lines[1].strip() if len(lines) > 1 else ""

    if ":" in first_line:
        parts = first_line.split(":", 1)
        repo_candidate = parts[0].strip()
        title_candidate = parts[1].strip()
        if "/" in repo_candidate and title_candidate:
            return repo_candidate, title_candidate, body, None, None

    repo = "demo-org/demo-repo"
    title = first_line
    return repo, title, body, None, None


@cl.on_chat_start
async def on_chat_start():
    """Display welcome screen and instructions when a new session begins."""
    await cl.Message(
        content=(
            "## 🤖 Welcome to Mini-Devin\n"
            "**Autonomous GitHub Issue-to-Pull-Request Multi-Agent System**\n\n"
            "### How to run an issue:\n"
            "- **GitHub Issue URL:** `https://github.com/owner/repo/issues/42`\n"
            "- **Manual format:** `owner/repo: Fix null pointer in auth service`\n"
            "- **Free text:** Just type any issue description (runs against demo repo)\n\n"
            "Mini-Devin will triage the issue, retrieve relevant context, formulate a "
            "concrete implementation plan, and **pause for your approval** before any code is modified."
        )
    ).send()


@cl.on_message
async def on_message(message: cl.Message):
    """
    Process incoming issue submissions, invoke the LangGraph workflow,
    handle human approval/rejection, and render results.
    """
    user_input = message.content.strip()
    if not user_input:
        await cl.Message(content="⚠️ Please provide a GitHub issue URL or issue title.").send()
        return

    # Parse and validate issue details
    try:
        repo, title, body, issue_url, issue_number = parse_issue_input(user_input)
        run_id = f"run_{uuid.uuid4().hex[:10]}"
        thread_id = f"thread_{uuid.uuid4().hex[:10]}"

        initial_state = create_initial_state(
            repo=repo,
            issue_title=title,
            issue_body=body,
            issue_url=issue_url,
            issue_number=issue_number,
            run_id=run_id,
            thread_id=thread_id,
        )
    except Exception as exc:
        logger.exception("Input validation error")
        await cl.Message(content=f"❌ **Validation Error:** {exc}").send()
        return

    config = {"configurable": {"thread_id": thread_id}}
    graph = create_graph(checkpointer=get_checkpointer())

    # Notification of start
    await cl.Message(
        content=(
            f"🚀 **Started Workflow Execution**\n\n"
            f"- **Repository:** `{repo}`\n"
            f"- **Issue Title:** {title}\n"
            f"- **Run ID:** `{run_id}`\n"
            f"- **Thread ID:** `{thread_id}`"
        )
    ).send()

    # Phase 1: Invoke workflow up to the Human Approval Interrupt
    try:
        async with cl.Step(name="Triage and Retrieval", type="run") as prep_step:
            prep_step.output = "Executing Triage and Retrieval agents..."
            # ainvoke executes until it hits interrupt() inside human_approval_node
            await graph.ainvoke(initial_state, config=config)

        # Inspect paused state from checkpointer
        current_state = await cl.make_async(graph.get_state)(config)
        state_values = current_state.values
        triage = state_values.get("triage") or {}
        retrieved = state_values.get("retrieved_context") or {}
        plan = state_values.get("plan") or {}
        workflow_status = state_values.get("status", "")

        # Handle Out-of-Scope or safe-stop termination
        if workflow_status == "out_of_scope" or not triage.get("is_supported", True):
            reason = triage.get("reason", "Out-of-scope issue.")
            warnings_list = triage.get("warnings", [])
            warnings_str = f"\n- **Warnings:** {', '.join(warnings_list)}" if warnings_list else ""
            await cl.Message(
                content=(
                    f"🛑 **Workflow Safely Halted by Triage Agent**\n\n"
                    f"- **Classification:** `{triage.get('classification', 'out_of_scope').upper()}`\n"
                    f"- **Eligibility to Proceed:** `False (Safe Terminal)`\n"
                    f"- **Explanation:** {reason}\n"
                    f"- **Confidence:** {triage.get('confidence', 0.0):.0%}"
                    f"{warnings_str}\n\n"
                    f"No code or repository modifications were attempted."
                )
            ).send()
            return

        # Display Triage Report & Downstream Status
        triage_cls = triage.get("classification", "unknown")
        triage_reason = triage.get("reason", "")
        triage_warnings = triage.get("warnings", [])
        warnings_md = f"\n- **Warnings:** {', '.join(triage_warnings)}" if triage_warnings else ""
        files_found = retrieved.get("files", [])
        await cl.Message(
            content=(
                f"### 📋 Triage Agent Report\n\n"
                f"- **Classification:** `{triage_cls.upper()}`\n"
                f"- **Eligibility to Proceed:** `True (Proceeding to Retrieval)`\n"
                f"- **Explanation:** {triage_reason}\n"
                f"- **Confidence:** {triage.get('confidence', 1.0):.0%}"
                f"{warnings_md}\n\n"
                f"**Downstream Retrieval Status:** `{retrieved.get('retrieval_status', 'success')}` via `{retrieved.get('retrieval_method', 'none')}` (`{len(files_found)} candidate files`)."
            )
        ).send()

        # Format and display the Frozen Implementation Plan
        plan_version = plan.get("plan_version", "v1")
        plan_hash = plan.get("plan_hash", "")
        short_hash = plan_hash[:8] if plan_hash else "unfrozen"
        plan_markdown = format_plan_as_markdown(plan)

        elements = []
        side_panel_notice = ""
        try:
            plan_element = cl.Text(
                name="implementation_plan.md",
                content=plan_markdown,
                display="side",
                language="markdown",
            )
            elements.append(plan_element)
            side_panel_notice = "👉 *The complete evidence-grounded engineering plan is open in the right-side preview panel (`implementation_plan.md`).*"
        except Exception as elem_err:
            logger.warning("Side panel element creation skipped: %s", elem_err)

        # Summary card in main chat
        steps_markdown = ""
        for s in plan.get("steps", []):
            steps_markdown += f"{s.get('step_number')}. **[{s.get('action', 'modify').upper()}]** `{s.get('target_file')}`: {s.get('description')}\n"

        plan_display = (
            f"### 📝 Proposed Implementation Plan (Frozen: `{plan_version}:{short_hash}`)\n\n"
            f"**Summary:** {plan.get('summary', title)}\n\n"
            f"**Analysis:** {plan.get('explanation', '')}\n\n"
            f"**Estimated Complexity:** `{plan.get('estimated_complexity', 'medium').upper()}` | **Provenance:** `{plan.get('provenance', 'deterministic')}`\n\n"
            f"**Planned Steps:**\n{steps_markdown}\n"
            f"**Affected Files:** `{', '.join(plan.get('affected_files', [])) or 'None'}`\n\n"
            f"{side_panel_notice}"
        )

        if not elements:
            plan_display += f"\n\n---\n{plan_markdown}"

        await cl.Message(content=plan_display, elements=elements).send()

    except Exception as exc:
        logger.exception("Error executing initial workflow phase")
        await cl.Message(content=f"❌ **Error during planning phase:** {exc}").send()
        return

    # Phase 2: Human Approval Interrupt & User Choice
    decision = "rejected"
    user_feedback = ""
    frozen_hash = plan.get("plan_hash", "")
    frozen_version = plan.get("plan_version", "v1")

    try:
        actions = [
            cl.Action(
                name="approve",
                payload={"decision": "approved", "plan_hash": frozen_hash, "plan_version": frozen_version},
                label=f"✅ Approve Plan ({frozen_hash[:8]})",
            ),
            cl.Action(
                name="reject",
                payload={"decision": "rejected", "plan_hash": frozen_hash, "plan_version": frozen_version},
                label="❌ Reject Plan",
            ),
        ]

        approval_prompt = (
            f"### 🛡️ Human Approval Required (Plan `{frozen_version}:{frozen_hash[:8]}`)\n"
            "Review the implementation plan above or in the side panel. "
            "Please confirm whether to approve code modification or reject the plan."
        )

        res = await cl.AskActionMessage(
            content=approval_prompt,
            actions=actions,
            timeout=300,
        ).send()

        if res and res.get("name") == "approve":
            decision = "approved"
            user_feedback = f"Approved by operator via Chainlit console (Hash: {frozen_hash[:8]})."
        else:
            decision = "rejected"
            user_feedback = f"Rejected by operator via Chainlit console (Hash: {frozen_hash[:8]})."

    except Exception as exc:
        logger.warning("Action prompt timed out or failed: %s; defaulting to rejection", exc)
        decision = "rejected"
        user_feedback = "Action prompt timed out; safely defaulting to rejection."

    # Phase 3: Resume the graph from saved checkpoint
    try:
        async with cl.Step(name="Workflow Resume", type="run") as resume_step:
            resume_step.output = f"Resuming execution with decision: {decision.upper()} (Plan: {frozen_hash[:8]})..."
            resume_cmd = Command(
                resume={
                    "decision": decision,
                    "feedback": user_feedback,
                    "plan_hash": frozen_hash,
                    "plan_version": frozen_version,
                }
            )
            final_result = await graph.ainvoke(resume_cmd, config=config)

        final_status = final_result.get("status", "unknown")
        events = final_result.get("events", [])

        if decision == "approved":
            await cl.Message(
                content=(
                    f"🎉 **Plan Approved & Workflow Completed**\n\n"
                    f"- **Status:** `{final_status}`\n"
                    f"- **Checkpoint Thread:** `{thread_id}`\n"
                    f"- **Handoff:** Ready for Coder Agent (Day 2 Milestone)\n"
                    f"- **Total Events Logged:** {len(events)}"
                )
            ).send()
        else:
            await cl.Message(
                content=(
                    f"🛑 **Plan Rejected & Workflow Terminated Safely**\n\n"
                    f"- **Status:** `{final_status}`\n"
                    f"- **Checkpoint Thread:** `{thread_id}`\n"
                    f"- **Safety Guarantee:** Zero code changes or pull requests attempted.\n"
                    f"- **Total Events Logged:** {len(events)}"
                )
            ).send()

        # Render workflow event log summary
        event_summary_lines = []
        for ev in events:
            ev_agent = ev.get("agent_name", "unknown")
            ev_status = ev.get("status", "")
            ev_msg = ev.get("message", "")
            event_summary_lines.append(f"- **[{ev_agent}]** ({ev_status}): {ev_msg}")

        await cl.Message(
            content="### 📜 Workflow Event Log\n" + "\n".join(event_summary_lines)
        ).send()

    except Exception as exc:
        logger.exception("Error resuming workflow execution")
        await cl.Message(content=f"❌ **Error resuming workflow:** {exc}").send()
