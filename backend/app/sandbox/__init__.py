"""Sandbox lifecycle and execution subsystem.

Exports the standard SandboxManager protocol, models, exceptions, and factory functions.
"""

from app.sandbox.base import (
    OutputCallback,
    SandboxError,
    SandboxManager,
    SandboxUnavailableError,
    create_sandbox_manager,
    get_sandbox_manager,
    set_active_sandbox_manager,
)
from app.sandbox.docker_manager import DockerSandboxManager
from app.sandbox.e2b_manager import E2BSandboxManager
from app.sandbox.models import (
    BrowserCheck,
    BrowserCheckResult,
    SandboxArtifact,
    SandboxRunRequest,
    SandboxRunResult,
    SandboxStatus,
)

__all__ = [
    "BrowserCheck",
    "BrowserCheckResult",
    "DockerSandboxManager",
    "E2BSandboxManager",
    "OutputCallback",
    "SandboxArtifact",
    "SandboxError",
    "SandboxManager",
    "SandboxRunRequest",
    "SandboxRunResult",
    "SandboxStatus",
    "SandboxUnavailableError",
    "create_sandbox_manager",
    "get_sandbox_manager",
    "set_active_sandbox_manager",
]
