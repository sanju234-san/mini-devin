
"""
Hardening tests for the Coder Agent.
Verifies fail-closed behavior, schema retries, and scope enforcement.
"""

from __future__ import annotations

import json
from unittest.mock import patch
import pytest

from app.agents.coder.agent import coder_node
from app.agents.schemas import compute_plan_hash, Diff, FileChange

@pytest.fixture(autouse=True)
def mock_llm_router():
    """Prevent any test from reaching the real LLM provider."""
    with patch("app.agents.model_router.complete") as mock:
        yield mock

@pytest.fixture(autouse=True)
def block_network():
    """Fail any test that attempts to call the real provider client or network."""
    with patch("app.integrations.llm_provider_client.complete", side_effect=RuntimeError("Network call detected in test!")):
        yield

@pytest.fixture
def approved_state() -> dict:
    """State with a valid human approval and matching plan hash."""
    plan = {
        "version_id": "v1",
        "summary": "Fix bug",
        "explanation": "Reasoning",
        "affected_files": ["src/calc.py"],
        "requirements": [{"id": "REQ-1", "description": "Fix it"}],
        "steps": [],
    }
    plan_hash = compute_plan_hash(plan)
    return {
        "human_approval": {"decision": "approved", "plan_hash": plan_hash},
        "plan": plan,
        "plan_versions": [plan],
        "approved_version": "v1",
        "retrieved_context": {"files": ["src/calc.py"], "snippets": []},
        "diff_schema_retries": 2,
        "events": [],
    }

def test_coder_fail_closed_missing_plan(approved_state: dict):
    """Fix 1: Block if plan or plan_hash is missing despite approval."""
    state = approved_state.copy()
    state["plan"] = None
    result = coder_node(state)
    assert result["status"] == "failed"
    assert "missing" in result["error"]

def test_coder_hash_mismatch_on_approved_version(approved_state: dict):
    """Fix 2: Block if the specific approved_version hash mismatches."""
    state = approved_state.copy()
    tampered_plan = approved_state["plan"].copy()
    tampered_plan["summary"] = "Tampered"
    state["plan_versions"] = [tampered_plan]

    result = coder_node(state)
    assert result["status"] == "failed"
    assert "hash mismatch" in result["error"]

def test_coder_safety_violation_escalates(approved_state: dict):
    """Fix 3: Path escape or denied path must block and escalate."""
    state = approved_state.copy()
    fake_diff = {
        "plan_version_id": "v1",
        "file_changes": [{"path": ".env", "change_type": "modify", "diff_text": "A", "requirement_ids": ["REQ-1"]}],
        "tests_added": [],
        "deviation_log": [],
        "change_summary": "Bad"
    }
    with patch("app.agents.model_router.complete", return_value=json.dumps(fake_diff)):
        result = coder_node(state)
        assert result["status"] == "failed"
        assert "safety violation" in result["error"]

def test_coder_schema_retry_success_fixed(approved_state: dict):
    """Fix 4: Retry on invalid JSON, then succeed."""
    state = approved_state.copy()
    responses = ["NOT JSON", json.dumps({
        "plan_version_id": "v1",
        "file_changes": [{"path": "src/calc.py", "change_type": "modify", "diff_text": "A", "requirement_ids": ["REQ-1"]}],
        "tests_added": [],
        "deviation_log": [],
        "change_summary": "Fixed"
    })]

    with patch("app.agents.model_router.complete", side_effect=responses):
        result = coder_node(state)
        assert result["status"] == "coding"
        assert "code_changes" in result

def test_coder_requirement_id_validation(approved_state: dict):
    """Fix 5: Fail if change lacks a requirement ID from the plan."""
    state = approved_state.copy()
    fake_diff = {
        "plan_version_id": "v1",
        "file_changes": [{"path": "src/calc.py", "change_type": "modify", "diff_text": "A", "requirement_ids": ["UNKNOWN-ID"]}],
        "tests_added": [],
        "deviation_log": [],
        "change_summary": "Bad"
    }
    with patch("app.agents.model_router.complete", return_value=json.dumps(fake_diff)):
        result = coder_node(state)
        assert result["status"] == "failed"
        assert "requirement ID" in result["error"]

def test_coder_unplanned_change_to_deviation_log(approved_state: dict):
    """Fix 5: Unplanned files go to deviation log."""
    state = approved_state.copy()
    fake_diff = {
        "plan_version_id": "v1",
        "file_changes": [
            {"path": "src/calc.py", "change_type": "modify", "diff_text": "A", "requirement_ids": ["REQ-1"]},
            {"path": "unplanned.py", "change_type": "modify", "diff_text": "B", "requirement_ids": ["REQ-1"]}
        ],
        "tests_added": [],
        "deviation_log": [],
        "change_summary": "Mixed"
    }
    with patch("app.agents.model_router.complete", return_value=json.dumps(fake_diff)):
        result = coder_node(state)
        assert result["status"] == "coding"
        assert len(result["code_changes"]) == 1
        assert len(result["deviation_log"]) == 1
        assert result["deviation_log"][0]["file_path"] == "unplanned.py"

def test_coder_writer_blind(approved_state: dict):
    """Fix 8: Returned state has no prompt/response text."""
    state = approved_state.copy()
    fake_diff = {
        "plan_version_id": "v1",
        "file_changes": [{"path": "src/calc.py", "change_type": "modify", "diff_text": "A", "requirement_ids": ["REQ-1"]}],
        "tests_added": [],
        "deviation_log": [],
        "change_summary": "Fixed"
    }
    with patch("app.agents.model_router.complete", return_value=json.dumps(fake_diff)):
        result = coder_node(state)
        assert "prompt" not in result
        assert "response" not in result
        assert "raw_text" not in result
