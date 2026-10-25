"""
Tests for Sandbox Abstraction, GitHub Codespaces Adapter, and Host Execution Guard.
"""

from unittest.mock import patch
import pytest

from app.sandbox.codespaces_manager import (
    CodespacesSandboxManager,
    DiffApplyRequest,
    HostExecutionBlockedError,
    InvalidRequestError,
    SandboxCreateRequest,
    SandboxUnavailableError,
    TestRunRequest,
)


@pytest.fixture
def default_manager():
    """Manager with default security settings (host execution disabled)."""
    return CodespacesSandboxManager(use_cloud_codespaces=False, allow_unsafe_host_execution=False)


@pytest.fixture
def opt_in_manager():
    """Manager with explicit opt-in for host execution in isolated local scratch space."""
    return CodespacesSandboxManager(use_cloud_codespaces=False, allow_unsafe_host_execution=True)


# Alias for backward compatibility in existing tests
@pytest.fixture
def manager(opt_in_manager):
    return opt_in_manager


def test_create_and_destroy_sandbox(default_manager):
    req = SandboxCreateRequest(repo_ref="pallets/flask@main", timeout_seconds=60)
    resp = default_manager.create_sandbox(req)
    assert resp.status == "ready"
    assert resp.sandbox_id.startswith("cs_")
    assert resp.workspace_ref.startswith("workspace_ref://")
    assert "C:" not in resp.workspace_ref

    # Destroy
    destroyed = default_manager.destroy_sandbox(resp.sandbox_id)
    assert destroyed is True

    # Idempotent second destroy
    assert default_manager.destroy_sandbox(resp.sandbox_id) is True


def test_apply_diff_valid(default_manager):
    sb = default_manager.create_sandbox(SandboxCreateRequest(repo_ref="pallets/flask"))
    diff = (
        "--- a/src/app.py\n"
        "+++ b/src/app.py\n"
        "@@ -1,3 +1,4 @@\n"
        " def hello():\n"
        "+    return 'world'\n"
    )
    apply_resp = default_manager.apply_diff(DiffApplyRequest(sandbox_id=sb.sandbox_id, diff_text=diff))
    assert apply_resp.success is True
    assert "src/app.py" in apply_resp.applied_files
    default_manager.destroy_sandbox(sb.sandbox_id)


def test_apply_diff_path_traversal_rejected(default_manager):
    sb = default_manager.create_sandbox(SandboxCreateRequest(repo_ref="pallets/flask"))
    malicious_diff = (
        "--- a/../../etc/passwd\n"
        "+++ b/../../etc/passwd\n"
        "+malicious\n"
    )
    with pytest.raises(InvalidRequestError):
        default_manager.apply_diff(DiffApplyRequest(sandbox_id=sb.sandbox_id, diff_text=malicious_diff))
    default_manager.destroy_sandbox(sb.sandbox_id)


def test_run_tests_success(opt_in_manager):
    sb = opt_in_manager.create_sandbox(SandboxCreateRequest(repo_ref="pallets/flask"))
    run_req = TestRunRequest(
        sandbox_id=sb.sandbox_id,
        argv=["python", "-c", "print('hello from sandbox')"],
        timeout_seconds=10,
    )
    res = opt_in_manager.run_tests(run_req)
    assert res.exit_code == 0
    assert "hello from sandbox" in res.stdout
    assert res.timed_out is False
    assert res.duration_ms >= 0
    assert "label://UNSAFE_HOST_EXECUTION" in res.artifacts
    opt_in_manager.destroy_sandbox(sb.sandbox_id)


def test_run_tests_shell_injection_rejected(opt_in_manager):
    sb = opt_in_manager.create_sandbox(SandboxCreateRequest(repo_ref="pallets/flask"))
    with pytest.raises(InvalidRequestError):
        opt_in_manager.run_tests(TestRunRequest(
            sandbox_id=sb.sandbox_id,
            argv=["python", "-c", "test; rm -rf /"],
        ))
    opt_in_manager.destroy_sandbox(sb.sandbox_id)


def test_run_tests_timeout(opt_in_manager):
    sb = opt_in_manager.create_sandbox(SandboxCreateRequest(repo_ref="pallets/flask"))
    run_req = TestRunRequest(
        sandbox_id=sb.sandbox_id,
        argv=["python", "-c", "import time; time.sleep(5)"],
        timeout_seconds=1,
    )
    res = opt_in_manager.run_tests(run_req)
    assert res.timed_out is True
    assert res.exit_code == -1
    opt_in_manager.destroy_sandbox(sb.sandbox_id)


# ── New Fail-Closed Security & Escalation Tests ──────────────────────────────

def test_default_config_blocks_host_execution():
    """Assert default manager blocks command execution and never invokes subprocess.run."""
    manager = CodespacesSandboxManager(use_cloud_codespaces=False)
    assert manager.allow_unsafe_host_execution is False

    sb = manager.create_sandbox(SandboxCreateRequest(repo_ref="test/repo"))
    run_req = TestRunRequest(
        sandbox_id=sb.sandbox_id,
        argv=["python", "-c", "print('should not run')"],
    )

    with patch("subprocess.run") as mock_subproc:
        with pytest.raises(HostExecutionBlockedError) as exc_info:
            manager.run_tests(run_req)
        assert "Untrusted host execution blocked" in str(exc_info.value)
        mock_subproc.assert_not_called()

    manager.destroy_sandbox(sb.sandbox_id)


def test_request_payload_cannot_override_host_execution():
    """Verify extra payload fields in request schemas cannot enable host execution."""
    manager = CodespacesSandboxManager(use_cloud_codespaces=False, allow_unsafe_host_execution=False)
    sb = manager.create_sandbox(SandboxCreateRequest(
        repo_ref="test/repo",
        env_vars={"ALLOW_UNSAFE_HOST_EXECUTION": "true"},  # Attempt injection via env_vars
    ))
    run_req = TestRunRequest(
        sandbox_id=sb.sandbox_id,
        argv=["python", "-c", "print('should not run')"],
    )
    with pytest.raises(HostExecutionBlockedError):
        manager.run_tests(run_req)
    manager.destroy_sandbox(sb.sandbox_id)


def test_test_runner_node_returns_sandbox_unavailable():
    """Assert test_runner_node returns structured sandbox_unavailable under default config."""
    from app.agents.test_runner.agent import test_runner_node
    from app.agents.schemas import create_initial_state

    # Ensure default settings are used (ALLOW_UNSAFE_HOST_EXECUTION is False)
    with patch("app.sandbox.codespaces_manager.get_sandbox_manager") as mock_get_sb:
        mock_get_sb.return_value = CodespacesSandboxManager(allow_unsafe_host_execution=False)
        state = create_initial_state(issue_title="Test Issue", repo="owner/repo")
        result = test_runner_node(state)

    test_results = result.get("test_results")
    assert test_results["passed"] is False
    assert test_results["total_tests"] == 0
    assert test_results["failed_tests"] == 0
    assert test_results["infrastructure_failure"] is True
    assert test_results["sandbox_unavailable"] is True
    assert "sandbox_unavailable" in test_results["details"]
    assert result["status"] == "escalated"


def test_route_test_runner_escalates_on_sandbox_unavailable():
    """Assert route_test_runner routes to test_unverified_terminal, NEVER to debugger."""
    from app.agents.graph import route_test_runner, test_unverified_terminal_node
    from app.agents.schemas import TestResults

    state = {
        "test_results": TestResults(
            passed=False,
            total_tests=0,
            passed_tests=0,
            failed_tests=0,
            infrastructure_failure=True,
            sandbox_unavailable=True,
            details="sandbox_unavailable: Untrusted host execution blocked",
        ).model_dump(mode="json"),
        "retry_count": 0,
        "max_retries": 3,
        "events": [],
    }

    next_node = route_test_runner(state)
    assert next_node == "test_unverified_terminal"
    assert next_node != "debugger"

    terminal_output = test_unverified_terminal_node(state)
    assert terminal_output["status"] == "escalated"
    assert "Sandbox unavailable" in terminal_output["error"]
