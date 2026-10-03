"""Core Pydantic schemas and typed data structures for Mini-Devin agents."""

import operator
from enum import Enum
from typing import Annotated, TypedDict
from pydantic import BaseModel, ConfigDict, model_validator


class BaseSchema(BaseModel):
    """Base schema that forbids extra fields across all models."""
    model_config = ConfigDict(extra="forbid")


# --- Enums ---

class PlanAuthor(str, Enum):
    """Author identity for a plan version."""
    PLANNER = "planner"
    HUMAN = "human"


class PlanStatus(str, Enum):
    """Lifecycle status of a plan version."""
    DRAFT = "draft"
    APPROVED = "approved"
    SUPERSEDED = "superseded"
    REJECTED = "rejected"


class ChangeType(str, Enum):
    """Type of file modification."""
    ADD = "add"
    MODIFY = "modify"
    DELETE = "delete"


class ReviewOutcome(str, Enum):
    """Overall outcome of a code review."""
    APPROVE = "approve"
    REVISE = "revise"
    BLOCK = "block"


class DimensionName(str, Enum):
    """The six evaluation dimensions for review."""
    PLAN_COVERAGE = "plan_coverage"
    CORRECTNESS_AND_VERIFICATION = "correctness_and_verification"
    REGRESSION_RISK = "regression_risk"
    SCOPE_CONTROL = "scope_control"
    SECURITY = "security"
    DOCUMENTATION = "documentation"


class DimensionResult(str, Enum):
    """Assessment result for a review dimension."""
    PASS = "pass"
    CONCERN = "concern"
    FAIL = "fail"


class EventType(str, Enum):
    """Type of streaming step event."""
    STARTED = "started"
    TOOL_CALL = "tool_call"
    COMPLETED = "completed"
    FAILED = "failed"
    RETRY = "retry"
    PAUSED = "paused"
    ESCALATED = "escalated"


class ModelKind(str, Enum):
    """Category of model or execution tier."""
    CLASSIFIER = "classifier"
    LLM = "llm"
    STATIC_ANALYSIS = "static_analysis"
    NONE = "none"


class TriageCategory(str, Enum):
    """Classification of an incoming GitHub issue."""
    BUG_FIX = "bug_fix"
    SMALL_FEATURE = "small_feature"
    TEST_WRITING = "test_writing"
    OUT_OF_SCOPE = "out_of_scope"


class TestResult(str, Enum):
    """Execution result of the test runner."""
    PASS = "pass"
    FAIL = "fail"
    ERROR = "error"


class RunStatus(str, Enum):
    """High-level run execution status."""
    RUNNING = "running"
    PR_OPENED = "pr_opened"
    OUT_OF_SCOPE = "out_of_scope"
    ESCALATED = "escalated"


class StopReason(str, Enum):
    """Terminal stop reason for escalated runs."""
    INJECTION_SUSPECTED = "injection_suspected"
    PLAN_SCHEMA_RETRIES_EXHAUSTED = "plan_schema_retries_exhausted"
    PLAN_REVISIONS_EXHAUSTED = "plan_revisions_exhausted"
    DIFF_BLOCKED = "diff_blocked"
    DIFF_SCHEMA_RETRIES_EXHAUSTED = "diff_schema_retries_exhausted"
    DEBUGGER_LIMIT = "debugger_limit"
    REVIEWER_LIMIT = "reviewer_limit"
    REVIEWER_BLOCK = "reviewer_block"
    RUN_BUDGET = "run_budget"
    SANDBOX_ERROR = "sandbox_error"
    ERROR = "error"


class ApprovalDecision(str, Enum):
    """Decision made at human-in-the-loop approval interrupt."""
    APPROVE = "approve"
    EDIT = "edit"
    REJECT = "reject"


class DiffGateResult(str, Enum):
    """Outcome of the diff gate check."""
    CLEAN = "clean"
    SCHEMA_INVALID = "schema_invalid"
    DENYLIST_HIT = "denylist_hit"


# --- Plan Models ---

class Requirement(BaseSchema):
    """Individual requirement extracted from an issue."""
    id: str
    description: str
    acceptance_criterion: str


class PlanStep(BaseSchema):
    """Ordered execution step in an implementation plan."""
    description: str
    requirement_ids: list[str]
    files: list[str]


class Plan(BaseSchema):
    """Implementation plan proposed by Planner or human editor."""
    version_id: str
    author: PlanAuthor
    status: PlanStatus
    intent: str
    scope: str
    non_goals: str
    affected_files: list[str]
    requirements: list[Requirement]
    steps: list[PlanStep]
    expected_tests: list[str]

    @model_validator(mode="after")
    def validate_plan(self) -> "Plan":
        """Validate requirement coverage, step references, and non-empty files."""
        if not self.requirements:
            raise ValueError("Plan must contain at least one requirement")
        if not self.affected_files:
            raise ValueError("Plan affected_files cannot be empty")
        req_ids = {r.id for r in self.requirements}
        covered_ids: set[str] = set()
        for idx, step in enumerate(self.steps):
            for rid in step.requirement_ids:
                if rid not in req_ids:
                    raise ValueError(f"Step {idx} references unknown requirement_id '{rid}'")
                covered_ids.add(rid)
        uncovered = req_ids - covered_ids
        if uncovered:
            raise ValueError(f"Requirements not covered by any step: {sorted(uncovered)}")
        return self


class ApprovalResponse(BaseSchema):
    """Payload provided when resuming from human approval interrupt."""
    decision: ApprovalDecision
    edited_plan: Plan | None = None
    feedback: str | None = None

    @model_validator(mode="after")
    def validate_decision_payload(self) -> "ApprovalResponse":
        """Ensure payload matches decision type."""
        if self.decision == ApprovalDecision.EDIT:
            if self.edited_plan is None:
                raise ValueError("Decision 'edit' requires edited_plan")
        elif self.decision == ApprovalDecision.REJECT:
            if not self.feedback or not self.feedback.strip():
                raise ValueError("Decision 'reject' requires non-empty feedback")
        elif self.decision == ApprovalDecision.APPROVE:
            if self.edited_plan is not None or self.feedback is not None:
                raise ValueError("Decision 'approve' requires neither edited_plan nor feedback")
        return self


# --- Diff Models ---

class FileChange(BaseSchema):
    """Individual file modification within a diff."""
    path: str
    change_type: ChangeType
    diff_text: str
    requirement_ids: list[str]

    @model_validator(mode="after")
    def validate_requirements(self) -> "FileChange":
        """Ensure file change is associated with at least one requirement."""
        if not self.requirement_ids:
            raise ValueError(f"FileChange for '{self.path}' must have at least one requirement_id")
        return self


class Deviation(BaseSchema):
    """Deviation from plan requirements or affected files."""
    file_path: str
    description: str
    reason: str
    requirement_id: str


class Diff(BaseSchema):
    """Diff produced by Coder or Debugger."""
    plan_version_id: str
    file_changes: list[FileChange]
    tests_added: list[str]
    deviation_log: list[Deviation]
    change_summary: str

    @model_validator(mode="after")
    def validate_file_changes(self) -> "Diff":
        """Ensure diff contains file changes."""
        if not self.file_changes:
            raise ValueError("Diff must contain at least one file change")
        return self


def validate_diff_against_plan(diff: Diff, plan: Plan) -> list[str]:
    """Validate diff consistency against the approved plan."""
    errors: list[str] = []
    if diff.plan_version_id != plan.version_id:
        errors.append(f"Diff plan_version_id '{diff.plan_version_id}' != plan version_id '{plan.version_id}'")
    plan_req_ids = {r.id for r in plan.requirements}
    for fc in diff.file_changes:
        for rid in fc.requirement_ids:
            if rid not in plan_req_ids:
                errors.append(f"FileChange '{fc.path}' references unknown requirement '{rid}'")
    for dev in diff.deviation_log:
        if dev.requirement_id not in plan_req_ids:
            errors.append(f"Deviation references unknown requirement '{dev.requirement_id}'")
    plan_files = set(plan.affected_files)
    deviation_files = {d.file_path for d in diff.deviation_log}
    for fc in diff.file_changes:
        if fc.path not in plan_files:
            if fc.path not in deviation_files:
                errors.append(f"Changed file '{fc.path}' not in plan affected_files and lacks a deviation entry")
    return errors


# --- Review Models ---

class DimensionAssessment(BaseSchema):
    """Assessment of one of the six review rubric dimensions."""
    name: DimensionName
    result: DimensionResult
    evidence: str


class Finding(BaseSchema):
    """Specific finding or concern raised during review."""
    severity: str
    location: str
    requirement_id: str | None = None
    description: str


class ReviewResult(BaseSchema):
    """Output of the Reviewer Agent evaluation."""
    outcome: ReviewOutcome
    plan_version_checked: str
    dimensions: list[DimensionAssessment]
    findings: list[Finding]
    revision_instructions: str | None = None
    block_reason: str | None = None

    @model_validator(mode="after")
    def validate_review(self) -> "ReviewResult":
        """Validate dimension completeness, instructions/block reason, and proposed outcome rules."""
        dim_names = [d.name for d in self.dimensions]
        expected_dims = set(DimensionName)
        if len(dim_names) != len(expected_dims) or set(dim_names) != expected_dims:
            raise ValueError("Review must assess all 6 dimensions exactly once")
        if self.outcome == ReviewOutcome.REVISE:
            if not self.revision_instructions or not self.revision_instructions.strip():
                raise ValueError("Outcome 'revise' requires non-empty revision_instructions")
        elif self.outcome == ReviewOutcome.BLOCK:
            if not self.block_reason or not self.block_reason.strip():
                raise ValueError("Outcome 'block' requires non-empty block_reason")
        elif self.outcome == ReviewOutcome.APPROVE:
            # PROPOSED rule: approve is invalid if any dimension result is fail
            if any(d.result == DimensionResult.FAIL for d in self.dimensions):
                raise ValueError("Cannot approve when any review dimension failed")
        return self


def validate_review_against_plan(review: ReviewResult, approved_version_id: str) -> list[str]:
    """Validate review result against approved plan version."""
    errors: list[str] = []
    if review.plan_version_checked != approved_version_id:
        errors.append(
            f"Plan version checked '{review.plan_version_checked}' does not match approved plan version '{approved_version_id}'"
        )
    return errors


# --- Step Event Models ---

class ModelInfo(BaseSchema):
    """Metadata regarding model and tier used by an agent step."""
    kind: ModelKind
    name: str | None = None
    provider: str | None = None
    tier: str | None = None


class TokenUsage(BaseSchema):
    """Token usage counts for LLM calls."""
    input_tokens: int
    output_tokens: int


class StepEvent(BaseSchema):
    """Live streaming event emitted during step execution."""
    run_id: str
    event_id: str
    timestamp: str
    agent: str
    step: str
    event_type: EventType
    tool_name: str | None = None
    model_info: ModelInfo
    tokens: TokenUsage | None = None
    plan_version_id: str | None = None
    message: str

    @model_validator(mode="after")
    def validate_event(self) -> "StepEvent":
        """Validate tool_name requirement and token presence only for LLM calls."""
        if self.event_type == EventType.TOOL_CALL:
            if not self.tool_name or not self.tool_name.strip():
                raise ValueError("Event type 'tool_call' requires tool_name")
        else:
            if self.tool_name is not None:
                raise ValueError("tool_name must be None when event_type is not 'tool_call'")
        if self.model_info.kind != ModelKind.LLM and self.tokens is not None:
            raise ValueError("tokens is allowed only when model_info.kind is 'llm'")
        return self


# --- Run State Models ---

class GuardrailResult(BaseSchema):
    """Result of input guardrail check."""
    flagged: bool
    reason: str | None = None


class TriageResult(BaseSchema):
    """Classification and cleaned query produced by Triage agent."""
    category: TriageCategory
    confidence: float
    cleaned_query: str


class RetrievedChunk(BaseSchema):
    """Code snippet and reference retrieved from repository."""
    file_path: str
    snippet: str
    reference: str


class RetrievalResult(BaseSchema):
    """Collection of chunks retrieved by Retrieval agent."""
    chunks: list[RetrievedChunk]


class TestEvidence(BaseSchema):
    """Summary and pointer to test run results."""
    result: TestResult
    summary: str
    log_reference: str | None = None


class RunState(TypedDict, total=False):
    """Shared typed state dictionary managed across StateGraph nodes."""
    run_id: str
    repo: str
    issue_number: int
    issue_text: str
    guardrail_result: GuardrailResult
    triage_result: TriageResult
    retrieval_result: RetrievalResult
    plan_versions: Annotated[list[Plan], operator.add]
    approved_version: str | None
    approval_feedback: str | None
    current_diff: Diff | None
    test_evidence: TestEvidence
    review_result: ReviewResult | None
    plan_schema_retries: int
    diff_schema_retries: int
    plan_revisions: int
    debug_attempts: int
    review_revisions: int
    run_llm_calls: int
    stop_reason: StopReason | None
    status: RunStatus
    current_step: str
    artifact_references: dict[str, str]
    latest_event: StepEvent | None
    plan_validation_ok: bool | None
    diff_gate_result: DiffGateResult | None
    diff_producer: str | None
    last_approval: ApprovalResponse | None
    node_error: StopReason | None


# --- Writer-blind Helper ---

class ReviewerInput(BaseSchema):
    """Writer-blind view of state provided to Reviewer Agent."""
    approved_plan: Plan
    diff: Diff
    test_evidence: TestEvidence | None
    retrieval_chunks: list[RetrievedChunk]
    deviation_log: list[Deviation]
    change_summary: str


def get_approved_plan(state: RunState) -> Plan:
    """Extract approved plan version from run state."""
    approved_id = state.get("approved_version")
    if not approved_id:
        raise ValueError("Missing 'approved_version' in state")
    for plan in state.get("plan_versions", []):
        if plan.version_id == approved_id:
            return plan
    raise ValueError(f"Approved plan version '{approved_id}' not found in state plan_versions")


def build_reviewer_input(state: RunState) -> ReviewerInput:
    """Build writer-blind input view for the Reviewer without coder reasoning."""
    approved_plan = get_approved_plan(state)
    diff = state.get("current_diff")
    if diff is None:
        raise ValueError("Missing 'current_diff' in state")
    test_evidence = state.get("test_evidence")
    retrieval = state.get("retrieval_result")
    retrieval_chunks = retrieval.chunks if retrieval is not None else []
    return ReviewerInput(
        approved_plan=approved_plan,
        diff=diff,
        test_evidence=test_evidence,
        retrieval_chunks=retrieval_chunks,
        deviation_log=diff.deviation_log,
        change_summary=diff.change_summary,
    )


def next_plan_version_id(state: RunState) -> str:
    """Return next version id 'v' followed by number of plans plus 1."""
    plans = state.get("plan_versions", [])
    return f"v{len(plans) + 1}"


def find_duplicate_plan_versions(state: RunState) -> list[str]:
    """Return any duplicated version_id values in state['plan_versions']."""
    plans = state.get("plan_versions", [])
    seen: set[str] = set()
    duplicates: list[str] = []
    for plan in plans:
        vid = plan.version_id
        if vid in seen:
            if vid not in duplicates:
                duplicates.append(vid)
        else:
            seen.add(vid)
    return duplicates
