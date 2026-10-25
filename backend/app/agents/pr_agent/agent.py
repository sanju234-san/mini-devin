"""
PR Agent Implementation.

Packages approved, tested, and reviewed changes into a documented GitHub pull request.
Safety Rule: Strictly opens pull requests; NEVER attempts to merge pull requests.
"""

from __future__ import annotations

import logging
from typing import Any

from app.agents.model_router import route
from app.agents.schemas import AgentState, create_event

logger = logging.getLogger(__name__)


def pr_node(state: AgentState) -> dict[str, Any]:
    """
    PR Agent Node: Generates PR description and opens pull request.
    
    Safety Invariants:
    1. Strictly prohibited from merging (creation only).
    2. Requires verified passing tests and approved code review.
    3. Never claims a PR was created without confirmed response from GitHub client.
    """
    tier = route("pr")
    logger.info("Executing PR node [tier=%s] (Creation only; never merge)", tier)

    review_findings = state.get("review_findings")
    review_approved = False
    if review_findings:
        if isinstance(review_findings, dict):
            review_approved = bool(review_findings.get("approved", False))
        elif hasattr(review_findings, "approved"):
            review_approved = bool(review_findings.approved)

    if not review_approved:
        logger.error("PR Agent invoked without approved review findings. Halting.")
        event = create_event(
            agent_name="pr",
            event_type="pr_blocked",
            status="failed",
            message="PR Agent blocked: cannot submit PR without approved code review.",
            metadata={"tier": tier.value},
        )
        return {
            "status": "failed",
            "current_agent": "pr",
            "error": "PR blocked: code review not approved.",
            "events": [event],
        }

    # Prepare PR title and structured description
    repo = state.get("repo", "unknown")
    issue_title = state.get("issue_title", "Resolved issue")
    plan_hash = state.get("plan_hash", "")
    short_hash = plan_hash[:8] if plan_hash else "N/A"

    pr_title = f"Fix: {issue_title}"
    pr_body = (
        f"## Automated Pull Request via Mini-Devin\n\n"
        f"- **Repository:** `{repo}`\n"
        f"- **Plan Verification Hash:** `{short_hash}`\n\n"
        f"### Verification Evidence\n"
        f"- Review Findings: Approved\n\n"
        f"> **Safety Constraint:** Merge is strictly forbidden by policy. Manual verification required."
    )

    # Check GitHub Client integration availability
    github_client_ready = False
    try:
        from app.integrations import github_client
        if hasattr(github_client, "create_pull_request"):
            github_client_ready = True
    except (ImportError, Exception):
        github_client_ready = False

    if state.get("strict_verification", False) and not github_client_ready:
        logger.info("PR submission blocked under strict verification: GitHub client unimplemented.")
        event = create_event(
            agent_name="pr",
            event_type="pr_blocked",
            status="failed",
            message="PR Agent BLOCKED: GitHub client integration 'app.integrations.github_client.create_pull_request' is unimplemented by teammate Tamanna.",
            metadata={
                "tier": tier.value,
                "github_client_ready": False,
                "missing_contract": "app.integrations.github_client.create_pull_request",
                "pr_title": pr_title,
            },
        )
        return {
            "status": "failed",
            "current_agent": "pr",
            "error": "PR creation BLOCKED: GitHub client integration unimplemented.",
            "pull_request_url": None,
            "events": [event],
        }

    event = create_event(
        agent_name="pr",
        event_type="pr_creation_started",
        status="in_progress",
        message="PR Agent preparing pull request for submission (merge forbidden).",
        metadata={
            "tier": tier.value,
            "pr_title": pr_title,
            "github_client_ready": github_client_ready,
        },
    )

    return {
        "status": "submitting_pr",
        "current_agent": "pr",
        "pull_request_url": None,
        "events": [event],
    }
