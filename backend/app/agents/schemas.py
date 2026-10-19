"""
Shared LangGraph state, schemas, and event models for Mini-Devin.

Defines the multi-agent workflow state, agent payload schemas,
and event logging structures across all stages from Triage to PR Agent.
"""

from __future__ import annotations

import datetime
from enum import Enum
import operator
from typing import Annotated, Any, Literal, Optional
from typing_extensions import TypedDict
import uuid

from pydantic import BaseModel, Field


# ── Triage Schemas ──────────────────────────────────────────────────

class TriageClassification(str, Enum):
    """Categorization of incoming GitHub issues."""
    BUG = "bug"
    FEATURE = "feature"
    TEST = "test"
    DOCUMENTATION = "documentation"
    QUESTION = "question"
    OUT_OF_SCOPE = "out_of_scope"
    UNSUPPORTED = "unsupported"


class TriageResult(BaseModel):
    """Triage evaluation result and routing determination."""
    classification: TriageClassification
    is_supported: bool = True
    confidence: float = Field(default=1.0, ge=0.0, le=1.0)
    reason: str = ""
    warnings: list[str] = Field(default_factory=list)


# ── Retrieval Schemas ───────────────────────────────────────────────

class RetrievedSnippet(BaseModel):
    """A retrieved code snippet from the repository."""
    file_path: str
    start_line: int = 1
    end_line: int = 1
    content: str = ""
    score: Optional[float] = None
    score_type: Optional[str] = None  # e.g., "lexical_bm25", "cosine_similarity"


class RetrievedContext(BaseModel):
    """Repository context retrieved for planning."""
    files: list[str] = Field(default_factory=list)
    snippets: list[RetrievedSnippet] = Field(default_factory=list)
    summary: str = ""
    is_mock: bool = False
    retrieval_status: str = "success"  # "success", "no_results", "missing_checkout", "indexing_failed"
    retrieval_method: str = "none"  # "faiss_embedding", "lexical_bm25", "none"
    error_message: Optional[str] = None


# ── Planner Schemas ─────────────────────────────────────────────────

class PlanEvidence(BaseModel):
    """Specific code evidence item referenced by the plan."""
    file_path: str
    start_line: int
    end_line: int
    symbol: Optional[str] = None
    observation: str


class RootCauseAnalysis(BaseModel):
    """Root-cause analysis separating evidence-supported facts from hypotheses."""
    evidence_backed_findings: list[str] = Field(default_factory=list)
    hypotheses: list[str] = Field(default_factory=list)


class PlanStep(BaseModel):
    """An individual atomic step in an implementation plan."""
    step_number: int
    description: str
    target_file: str
    action: Literal["create", "modify", "delete", "inspect"] = "modify"


class ImplementationPlan(BaseModel):
    """Structured implementation plan proposed by the Planner Agent."""
    summary: str
    explanation: str
    steps: list[PlanStep] = Field(default_factory=list)
    affected_files: list[str] = Field(default_factory=list)
    estimated_complexity: Literal["low", "medium", "high"] = "medium"

    # Detailed engineering plan fields
    plan_version: str = "v1"
    plan_hash: str = ""
    evidence_items: list[PlanEvidence] = Field(default_factory=list)
    root_cause: Optional[RootCauseAnalysis] = None
    file_changes: list[dict[str, Any]] = Field(default_factory=list)
    dependencies_and_interfaces: list[str] = Field(default_factory=list)
    acceptance_criteria: list[str] = Field(default_factory=list)
    test_strategy: dict[str, Any] = Field(default_factory=dict)
    security_considerations: list[str] = Field(default_factory=list)
    risks_and_assumptions: list[str] = Field(default_factory=list)
    suggested_verification_commands: list[str] = Field(default_factory=list)
    provenance: str = "deterministic_evidence_synthesis"


# ── Human Approval Schemas ──────────────────────────────────────────

class ApprovalDecision(BaseModel):
    """Human review decision on the proposed implementation plan."""
    decision: Literal["approved", "rejected", "pending"] = "pending"
    feedback: Optional[str] = None
    timestamp: Optional[str] = None
    plan_version: Optional[str] = None
    plan_hash: Optional[str] = None


# ── Event / Observability Schemas ───────────────────────────────────

class WorkflowEvent(BaseModel):
    """Structured workflow progress event emitted during graph execution."""
    event_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    event_type: str  # e.g., "workflow_started", "agent_step", "approval_required", "completed", "error"
    agent_name: str
    status: str      # e.g., "in_progress", "awaiting_approval", "success", "failed", "rejected"
    message: str
    timestamp: str = Field(default_factory=lambda: datetime.datetime.now(datetime.timezone.utc).isoformat())
    metadata: dict[str, Any] = Field(default_factory=dict)


def create_event(
    agent_name: str,
    event_type: str,
    status: str,
    message: str,
    metadata: Optional[dict[str, Any]] = None,
) -> dict[str, Any]:
    """Helper to construct a validated event dictionary for the state reducer."""
    event = WorkflowEvent(
        agent_name=agent_name,
        event_type=event_type,
        status=status,
        message=message,
        metadata=metadata or {},
    )
    return event.model_dump()


# ── Execution, Verification & Review Schemas ────────────────────────

class PatchMetadata(BaseModel):
    """Metadata describing a generated patch or file change."""
    file_path: str
    diff: str
    lines_added: int = 0
    lines_removed: int = 0


class TestResults(BaseModel):
    """Sandbox verification test run results."""
    passed: bool
    total_tests: int = 0
    passed_tests: int = 0
    failed_tests: int = 0
    details: str = ""


class ReviewFindings(BaseModel):
    """Automated reviewer findings comparing diff to the approved plan."""
    approved: bool
    score: float = Field(default=1.0, ge=0.0, le=1.0)
    comments: list[str] = Field(default_factory=list)


# ── LangGraph Workflow State ────────────────────────────────────────

class AgentState(TypedDict, total=False):
    """
    Shared LangGraph workflow state across all Mini-Devin agents.
    
    Annotated fields use custom reducers (e.g. `events` accumulates entries).
    All other fields are replaced when updated by returning dicts from nodes.
    """
    # Execution & Tracking Identifiers
    run_id: str
    thread_id: str
    
    # Target Repository & Issue Information
    repo: str
    issue_url: Optional[str]
    issue_number: Optional[int]
    issue_title: str
    issue_body: str
    
    # Workflow Stage Artifacts
    triage: Optional[TriageResult | dict[str, Any]]
    retrieved_context: Optional[RetrievedContext | dict[str, Any]]
    plan: Optional[ImplementationPlan | dict[str, Any]]
    plan_version: Optional[str]
    plan_hash: Optional[str]
    human_approval: Optional[ApprovalDecision | dict[str, Any]]
    
    # Retry & Loop Limits
    retry_count: int
    max_retries: int
    
    # Downstream Stage Metadata (populated in subsequent stages)
    code_changes: Optional[list[PatchMetadata | dict[str, Any]]]
    test_results: Optional[TestResults | dict[str, Any]]
    review_findings: Optional[ReviewFindings | dict[str, Any]]
    
    # Overall Workflow Status & Observability
    status: str  # "pending", "triaging", "retrieving", "planning", "awaiting_approval", "approved", "rejected", "out_of_scope", "completed", "failed"
    current_agent: Optional[str]
    error: Optional[str]
    events: Annotated[list[dict[str, Any]], operator.add]
    pull_request_url: Optional[str]


def serialize_plan_canonical(plan: Any) -> str:
    """
    Serialize an ImplementationPlan into deterministic canonical JSON.
    Excludes dynamic plan_hash so the hash computation is strictly idempotent.
    """
    import json
    if hasattr(plan, "model_dump"):
        data = plan.model_dump(mode="json")
    elif isinstance(plan, dict):
        data = dict(plan)
    else:
        data = {"summary": str(plan)}

    # Exclude plan_hash itself to prevent circular hashing
    data.pop("plan_hash", None)

    return json.dumps(data, sort_keys=True, separators=(",", ":"), ensure_ascii=False)


def compute_plan_hash(plan: Any) -> str:
    """Compute deterministic SHA-256 hash of a plan's canonical serialization."""
    import hashlib
    canonical_str = serialize_plan_canonical(plan)
    return hashlib.sha256(canonical_str.encode("utf-8")).hexdigest()


def format_plan_as_markdown(plan: Any) -> str:
    """Format an ImplementationPlan as readable GitHub-flavored Markdown for side panel preview."""
    if hasattr(plan, "model_dump"):
        p = plan.model_dump(mode="json")
    elif isinstance(plan, dict):
        p = plan
    else:
        return f"# Implementation Plan\n\n{plan}"

    summary = p.get("summary", "Implementation Plan")
    version = p.get("plan_version", "v1")
    phash = p.get("plan_hash", "")
    short_hash = phash[:8] if phash else "unfrozen"
    complexity = p.get("estimated_complexity", "medium").upper()
    provenance = p.get("provenance", "deterministic_evidence_synthesis")
    explanation = p.get("explanation", "")

    lines = [
        f"# 📋 Implementation Plan: {summary}",
        f"**Plan Version:** `{version}` | **Plan Hash:** `{short_hash}` | **Complexity:** `{complexity}` | **Provenance:** `{provenance}`",
        "",
        "## 1. Summary & Intended Behavior",
        explanation or summary,
        "",
    ]

    rc = p.get("root_cause")
    if rc:
        lines.append("## 2. Root Cause Analysis")
        findings = rc.get("evidence_backed_findings", [])
        if findings:
            lines.append("### 🔍 Evidence-Supported Findings")
            for f in findings:
                lines.append(f"- {f}")
        hypotheses = rc.get("hypotheses", [])
        if hypotheses:
            lines.append("### 💡 Hypotheses (Awaiting Further Evidence)")
            for h in hypotheses:
                lines.append(f"- {h}")
        lines.append("")

    evidence = p.get("evidence_items", [])
    if evidence:
        lines.append("## 3. Grounded Code Evidence")
        for ev in evidence:
            fpath = ev.get("file_path", "")
            sline = ev.get("start_line", 1)
            eline = ev.get("end_line", 1)
            sym = ev.get("symbol")
            sym_str = f" (`{sym}`)" if sym else ""
            obs = ev.get("observation", "")
            lines.append(f"- `{fpath}:{sline}-{eline}`{sym_str}: {obs}")
        lines.append("")

    file_changes = p.get("file_changes", [])
    if file_changes:
        lines.append("## 4. Proposed Changes by File")
        for fc in file_changes:
            lines.append(f"### `{fc.get('file_path', 'unknown')}`")
            if fc.get("module_or_function"):
                lines.append(f"- **Target Symbol:** `{fc.get('module_or_function')}`")
            lines.append(f"- **Change Description:** {fc.get('change_description', '')}")
        lines.append("")

    steps = p.get("steps", [])
    if steps:
        lines.append("## 5. Implementation Steps")
        for s in steps:
            num = s.get("step_number", 1)
            action = str(s.get("action", "modify")).upper()
            target = s.get("target_file", "")
            desc = s.get("description", "")
            lines.append(f"{num}. **[{action}]** `{target}`: {desc}")
        lines.append("")

    ac = p.get("acceptance_criteria", [])
    if ac:
        lines.append("## 6. Acceptance Criteria")
        for criterion in ac:
            lines.append(f"- [ ] {criterion}")
        lines.append("")

    ts = p.get("test_strategy", {})
    if ts:
        lines.append("## 7. Test Strategy")
        inspect_tests = ts.get("existing_tests_to_inspect", [])
        if inspect_tests:
            lines.append("### Existing Tests to Inspect")
            for t in inspect_tests:
                lines.append(f"- `{t}`")
        new_tests = ts.get("new_tests_to_add", [])
        if new_tests:
            lines.append("### New Tests to Add")
            for t in new_tests:
                lines.append(f"- {t}")
        lines.append("")

    deps = p.get("dependencies_and_interfaces", [])
    if deps:
        lines.append("## 8. Dependencies & Interfaces")
        for d in deps:
            lines.append(f"- {d}")
        lines.append("")

    sec = p.get("security_considerations", [])
    if sec:
        lines.append("## 9. Security & Guardrail Considerations")
        for s in sec:
            lines.append(f"- {s}")
        lines.append("")

    risks = p.get("risks_and_assumptions", [])
    if risks:
        lines.append("## 10. Risks & Assumptions")
        for r in risks:
            lines.append(f"- {r}")
        lines.append("")

    cmds = p.get("suggested_verification_commands", [])
    if cmds:
        lines.append("## 11. Suggested Verification Commands")
        lines.append("> *Note: These commands are suggested for execution in the test sandbox; they have not been run.*")
        lines.append("```bash")
        for c in cmds:
            lines.append(c)
        lines.append("```")
        lines.append("")

    return "\n".join(lines)


def create_initial_state(
    issue_title: str,
    issue_body: str = "",
    repo: str = "local/repo",
    issue_url: Optional[str] = None,
    issue_number: Optional[int] = None,
    run_id: Optional[str] = None,
    thread_id: Optional[str] = None,
    max_retries: int = 3,
) -> AgentState:
    """
    Construct a validated initial AgentState for workflow execution.
    
    Raises:
        ValueError: If required inputs (repo or issue_title) are missing or blank.
    """
    if not repo or not repo.strip():
        raise ValueError("Repository identifier ('repo') cannot be empty.")
    if not issue_title or not issue_title.strip():
        raise ValueError("Issue title cannot be empty.")

    active_run_id = run_id or f"run_{uuid.uuid4().hex[:12]}"
    active_thread_id = thread_id or active_run_id

    initial_event = create_event(
        agent_name="orchestrator",
        event_type="workflow_started",
        status="pending",
        message=f"Initialized workflow for {repo} (run_id: {active_run_id})",
        metadata={"repo": repo, "issue_title": issue_title, "issue_number": issue_number},
    )

    return {
        "run_id": active_run_id,
        "thread_id": active_thread_id,
        "repo": repo.strip(),
        "issue_url": issue_url.strip() if issue_url else None,
        "issue_number": issue_number,
        "issue_title": issue_title.strip(),
        "issue_body": issue_body.strip() if issue_body else "",
        "triage": None,
        "retrieved_context": None,
        "plan": None,
        "plan_version": None,
        "plan_hash": None,
        "human_approval": None,
        "retry_count": 0,
        "max_retries": max_retries,
        "code_changes": None,
        "test_results": None,
        "review_findings": None,
        "status": "pending",
        "current_agent": None,
        "error": None,
        "events": [initial_event],
        "pull_request_url": None,
    }
