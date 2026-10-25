"""Core protocols, factory functions, and exception types for the sandbox subsystem.

Plain-Language Guide for Beginners:
-----------------------------------
A "Protocol" in Python acts like an architectural blueprint or contract. It says:
"Any class that wants to be a SandboxManager must provide these methods (`run`, `destroy_all`, `ping`)."

Because we use a Protocol:
1. The agent code (Sanjeevni's Test-Runner) only cares about the Protocol, not whether
   we are running Docker locally or E2B in the cloud.
2. In automated tests, we can supply a fast fake/mock manager without running real containers.
3. If Docker is not available on Render or during development, `get_sandbox_manager()`
   fails cleanly with a descriptive `SandboxUnavailableError` without crashing the whole server.
"""

from __future__ import annotations

import logging
from collections.abc import Awaitable, Callable
from typing import TYPE_CHECKING, Literal, Protocol, runtime_checkable

from app.sandbox.models import SandboxRunRequest, SandboxRunResult

if TYPE_CHECKING:
    from app.config import Settings

logger = logging.getLogger(__name__)

# Output callback type for real-time log streaming (to be consumed by WebSocket layer)
# Arguments: stream ('stdout' or 'stderr'), text (string chunk)
OutputCallback = Callable[[Literal["stdout", "stderr"], str], Awaitable[None]]


class SandboxError(Exception):
    """Base exception for all sandbox execution failures."""


class SandboxUnavailableError(SandboxError):
    """Raised when the sandbox runtime is unreachable or not running (e.g. Docker daemon is down)."""


@runtime_checkable
class SandboxManager(Protocol):
    """Standardized asynchronous interface for container/microVM sandbox runners."""

    async def run(
        self,
        request: SandboxRunRequest,
        on_output: OutputCallback | None = None,
    ) -> SandboxRunResult:
        """Execute the requested test run in an ephemeral, isolated container.

        Args:
            request: The run parameters (code archive, diff, test command, timeout).
            on_output: Optional async callback receiving real-time stdout/stderr lines.

        Returns:
            SandboxRunResult containing status, exit code, logs, and artifacts.
        """
        ...

    async def destroy_all(self) -> None:
        """Immediately kill and remove all active sandbox containers managed by this instance."""
        ...

    async def ping(self) -> bool:
        """Health-check the underlying runtime (e.g. check if Docker daemon responds)."""
        ...


# Module-level reference to the active sandbox manager instance
_ACTIVE_SANDBOX_MANAGER: SandboxManager | None = None


def set_active_sandbox_manager(manager: SandboxManager | None) -> None:
    """Register or unregister the globally active sandbox manager instance."""
    global _ACTIVE_SANDBOX_MANAGER
    _ACTIVE_SANDBOX_MANAGER = manager


def get_sandbox_manager() -> SandboxManager:
    """Return the currently active sandbox manager, or raise SandboxUnavailableError.

    This function is the primary dependency used by FastAPI endpoints and agent nodes.
    It returns the manager instance initialized during FastAPI application lifespan.
    """
    if _ACTIVE_SANDBOX_MANAGER is None:
        raise SandboxUnavailableError(
            "Sandbox manager is not currently active or initialized. "
            "Ensure the FastAPI app lifespan has started and Docker is available."
        )
    return _ACTIVE_SANDBOX_MANAGER


def create_sandbox_manager(settings: Settings) -> SandboxManager:
    """Factory function to instantiate the configured sandbox manager backend.

    Reads `settings.SANDBOX_BACKEND`:
    - 'docker': Instantiates DockerSandboxManager (local Docker engine).
    - 'e2b': Instantiates E2BSandboxManager (cloud microVMs).
    """
    backend = settings.SANDBOX_BACKEND.lower()
    if backend == "docker":
        from app.sandbox.docker_manager import DockerSandboxManager

        return DockerSandboxManager(settings)
    elif backend == "e2b":
        from app.sandbox.e2b_manager import E2BSandboxManager

        return E2BSandboxManager(settings)
    else:
        raise ValueError(f"Unsupported sandbox backend: {settings.SANDBOX_BACKEND!r}")
