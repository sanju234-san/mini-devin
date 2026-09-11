"""
Centralised app configuration: env vars, sandbox settings, and the
bounded self-correction retry limit used by the Debugger Agent.
"""

import os

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN", "")
LLM_API_KEY = os.getenv("LLM_API_KEY", "")
MAX_RETRY_ATTEMPTS = int(os.getenv("MAX_RETRY_ATTEMPTS", "3"))
SANDBOX_BACKEND = os.getenv("SANDBOX_BACKEND", "docker")  # "docker" | "e2b"
