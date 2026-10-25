"""Pydantic models for the Mini-Devin sandbox subsystem.

Plain-Language Guide for Beginners:
-----------------------------------
A "sandbox" is a secure, isolated box (a Docker container or microVM) where untrusted
code (such as AI-generated code patches or test suites) is executed so that it cannot
harm the host server or access private network services.

This module defines the structured messages (data schemas) used to talk to the sandbox:
1. `SandboxRunRequest`: The input request telling the sandbox what repository archive to
   extract, which code patch (diff) to apply, which test command to run, and optional
   browser verification settings.
2. `SandboxStatus`: The final outcome of a sandbox run (e.g. passed, failed, timed_out,
   diff_rejected, error).
3. `SandboxArtifact`: Files produced during execution (such as screenshots or recordings)
   that are captured and returned to the caller.
4. `SandboxRunResult`: The full output returned to the caller, containing the exit code,
   console logs, execution duration, and artifacts.
5. `BrowserCheck`: Configuration for live web-app browser verification driven over the
   Chrome DevTools Protocol (CDP).
6. `BrowserCheckResult`: Diagnostic findings from browser verification (HTTP status codes,
   page title, console logs, uncaught exceptions).
"""

from __future__ import annotations

from enum import Enum
from typing import Literal
from urllib.parse import urlsplit
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator


class SandboxStatus(str, Enum):
    """Execution status outcomes for a sandbox run."""

    passed = "passed"
    failed = "failed"
    timed_out = "timed_out"
    diff_rejected = "diff_rejected"
    error = "error"


def _validate_command_argv(cmd: list[str] | None, field_name: str) -> list[str] | None:
    """Validate that command is a non-empty argv list meeting security limits.

    Rules:
    - Must be a list of strings (argv format, NEVER a shell string)
    - Length between 1 and 32 arguments
    - Each argument must be 1..1000 characters
    - No NUL bytes (\\0) allowed
    """
    if cmd is None:
        return None
    if not isinstance(cmd, list):
        raise ValueError(f"{field_name} must be a list of string arguments (argv), not a string")
    if len(cmd) < 1 or len(cmd) > 32:
        raise ValueError(f"{field_name} must contain between 1 and 32 arguments, got {len(cmd)}")
    for i, arg in enumerate(cmd):
        if not isinstance(arg, str):
            raise ValueError(f"{field_name}[{i}] must be a string, got {type(arg).__name__}")
        if len(arg) < 1 or len(arg) > 1000:
            raise ValueError(
                f"{field_name}[{i}] length must be between 1 and 1000 characters, got {len(arg)}"
            )
        if "\0" in arg:
            raise ValueError(f"{field_name}[{i}] contains forbidden NUL (\\0) byte")
    return cmd


class BrowserCheck(BaseModel):
    """Specification for running live browser verification inside the sandbox.

    Security Rules:
    - Commands must be strictly argv lists (no shell strings).
    - URL must target strictly localhost or 127.0.0.1 on ports 1024-65535 (no external calls).
    - Userinfo (e.g. http://127.0.0.1@evil.com) is rejected to prevent SSRF bypasses.
    - Path count is capped at 5 to bound verification duration.
    """

    model_config = ConfigDict(extra="forbid")

    start_command: list[str] = Field(
        description="Command to start the web application server (argv list, no shell string)."
    )
    url: str = Field(
        description="Base URL of the local server, e.g. http://127.0.0.1:3000 or http://localhost:8080."
    )
    paths: list[str] = Field(
        default=["/"],
        description="Relative page routes to verify (max 5 routes, each starting with '/').",
    )
    readiness_timeout_seconds: int = Field(
        default=30,
        ge=5,
        le=120,
        description="Max seconds to wait for server port to respond before failing.",
    )
    screenshot: bool = Field(
        default=True,
        description="Whether to capture a full-page screenshot of visited routes.",
    )
    record_video: bool = Field(
        default=False,
        description="Whether to attempt capturing a video recording (best effort).",
    )

    @field_validator("start_command")
    @classmethod
    def validate_start_cmd(cls, v: list[str]) -> list[str]:
        val = _validate_command_argv(v, "start_command")
        if val is None:
            raise ValueError("start_command cannot be None")
        return val

    @field_validator("url")
    @classmethod
    def validate_url(cls, v: str) -> str:
        if not isinstance(v, str):
            raise ValueError("url must be a string")
        parsed = urlsplit(v)
        if parsed.scheme not in ("http", "https"):
            raise ValueError(f"url scheme must be 'http' or 'https', got '{parsed.scheme}'")
        # Reject userinfo tricks (e.g. http://127.0.0.1@attacker.com)
        if parsed.username or parsed.password or "@" in (parsed.netloc or ""):
            raise ValueError("url contains forbidden userinfo credentials or '@'")
        hostname = parsed.hostname
        if hostname not in ("127.0.0.1", "localhost"):
            raise ValueError(
                f"url must point to 127.0.0.1 or localhost, external host '{hostname}' is rejected"
            )
        if parsed.port is None:
            raise ValueError("url must include an explicit port number (1024-65535)")
        if not (1024 <= parsed.port <= 65535):
            raise ValueError(f"url port must be between 1024 and 65535, got {parsed.port}")
        return v

    @field_validator("paths")
    @classmethod
    def validate_paths(cls, v: list[str]) -> list[str]:
        if not isinstance(v, list):
            raise ValueError("paths must be a list of strings")
        if len(v) < 1 or len(v) > 5:
            raise ValueError(f"paths list must have between 1 and 5 entries, got {len(v)}")
        for i, p in enumerate(v):
            if not isinstance(p, str) or not p.startswith("/"):
                raise ValueError(f"paths[{i}] must be a string starting with '/', got {p!r}")
            if len(p) > 200 or "\0" in p:
                raise ValueError(f"paths[{i}] invalid or too long")
        return v


class BrowserCheckResult(BaseModel):
    """Diagnostic outcome of live browser verification."""

    ok: bool = Field(description="True if server started and all page navigations succeeded.")
    error: str | None = Field(
        default=None,
        description="Short generic error message if verification failed.",
    )
    http_status: dict[str, int | None] = Field(
        default_factory=dict,
        description="HTTP response status code per verified route path.",
    )
    page_title: str | None = Field(
        default=None,
        description="Title tag of the first loaded page.",
    )
    console_errors: list[str] = Field(
        default_factory=list,
        description="Captured browser console errors (max 50, capped at 500 chars each).",
    )
    page_errors: list[str] = Field(
        default_factory=list,
        description="Uncaught browser window exceptions (max 50, capped at 500 chars each).",
    )
    failed_requests: list[str] = Field(
        default_factory=list,
        description="Network requests from the page that failed (max 50, capped at 500 chars each).",
    )
    server_log_tail: str | None = Field(
        default=None,
        description="Last lines of web server stdout/stderr (max 4 KiB).",
    )
    video_supported: bool = Field(
        default=False,
        description="Whether video recording was supported over the CDP connection.",
    )
    duration_seconds: float = Field(
        default=0.0,
        description="Elapsed duration of browser verification.",
    )

    @field_validator("console_errors", "page_errors", "failed_requests")
    @classmethod
    def cap_error_lists(cls, v: list[str]) -> list[str]:
        truncated = []
        for item in v[:50]:
            truncated.append(str(item)[:500])
        return truncated

    @field_validator("server_log_tail")
    @classmethod
    def cap_log_tail(cls, v: str | None) -> str | None:
        if v is None:
            return None
        # Max 4 KiB (4096 bytes)
        v_bytes = v.encode("utf-8", errors="ignore")
        if len(v_bytes) > 4096:
            return v_bytes[-4096:].decode("utf-8", errors="ignore")
        return v


class SandboxArtifact(BaseModel):
    """File artifact retrieved from the sandbox (e.g. screenshot or video).

    Note: The artifact name is ALWAYS generated by the backend (never taken
    from untrusted container names) to prevent directory traversal or file collisions.
    """

    name: str = Field(description="Backend-generated safe artifact name, e.g. 'screenshot_1.png'.")
    type: Literal["screenshot", "video"] = Field(description="Artifact type classification.")
    content_type: str = Field(description="MIME type, e.g. 'image/png' or 'video/webm'.")
    size_bytes: int = Field(ge=0, description="Size of artifact data in bytes.")
    data: bytes = Field(
        repr=False,
        description="Raw file bytes. Excluded from repr() to prevent log flooding.",
    )


class SandboxRunRequest(BaseModel):
    """Input parameters for an isolated sandbox run.

    Security & Hardening Constraints:
    - extra='forbid' prevents accidental or malicious unknown attributes.
    - Commands must be argv lists of bounded length (no shell strings).
    - Repo archive is validated against maximum upload size.
    - Diff is limited to 1 MiB.
    """

    model_config = ConfigDict(extra="forbid")

    run_id: UUID = Field(description="Unique ID of the parent workflow run.")
    repo_archive: bytes = Field(
        repr=False,
        description="Tarball (.tar or .tar.gz) of the repository at base commit.",
    )
    diff: str | None = Field(
        default=None,
        description="Unified diff patch to apply to the repository (max 1 MiB).",
    )
    setup_command: list[str] | None = Field(
        default=None,
        description="Optional pre-test setup command (argv list, e.g. ['pip', 'install', '-e', '.']).",
    )
    test_command: list[str] = Field(
        default=["python", "-m", "pytest", "-q"],
        description="Test execution command (argv list, default ['python', '-m', 'pytest', '-q']).",
    )
    timeout_seconds: int | None = Field(
        default=None,
        ge=1,
        description="Optional timeout in seconds. Can only LOWER the server ceiling, never raise it.",
    )
    browser: BrowserCheck | None = Field(
        default=None,
        description="Optional live browser verification configuration.",
    )

    @field_validator("setup_command")
    @classmethod
    def validate_setup_cmd(cls, v: list[str] | None) -> list[str] | None:
        return _validate_command_argv(v, "setup_command")

    @field_validator("test_command")
    @classmethod
    def validate_test_cmd(cls, v: list[str]) -> list[str]:
        val = _validate_command_argv(v, "test_command")
        if val is None:
            raise ValueError("test_command cannot be empty")
        return val

    @field_validator("diff")
    @classmethod
    def validate_diff_size(cls, v: str | None) -> str | None:
        if v is None:
            return None
        # Max 1 MiB (1048576 bytes)
        if len(v.encode("utf-8", errors="ignore")) > 1048576:
            raise ValueError("diff exceeds maximum permitted size of 1 MiB")
        if "\0" in v:
            raise ValueError("diff contains forbidden NUL (\\0) byte")
        return v


class SandboxRunResult(BaseModel):
    """Complete results from an ephemeral sandbox execution."""

    run_id: UUID = Field(description="UUID of the run.")
    status: SandboxStatus = Field(description="Overall execution status.")
    exit_code: int | None = Field(
        default=None,
        description="Process exit code of the test command (0 = success).",
    )
    diff_applied: bool = Field(
        default=False,
        description="Whether the git diff patch was successfully applied.",
    )
    log: str = Field(
        default="",
        description="Combined stdout and stderr log from container execution.",
    )
    log_truncated: bool = Field(
        default=False,
        description="True if output was truncated after exceeding log byte limits.",
    )
    duration_seconds: float = Field(
        default=0.0,
        description="Elapsed wall-clock execution time in seconds.",
    )
    error: str | None = Field(
        default=None,
        description="Short generic error message on failure (no host paths or stack traces).",
    )
    browser: BrowserCheckResult | None = Field(
        default=None,
        description="Results of live browser verification if requested.",
    )
    artifacts: list[SandboxArtifact] = Field(
        default_factory=list,
        description="List of captured artifacts (screenshots, videos).",
    )
