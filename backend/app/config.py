"""
Centralised app configuration: env vars, sandbox settings, and the
bounded self-correction retry limit used by the Debugger Agent.
"""

import os

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN", "")

GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
GOOGLE_AI_STUDIO_API_KEY = os.getenv("GOOGLE_AI_STUDIO_API_KEY", "")
HUGGINGFACE_API_TOKEN = os.getenv("HUGGINGFACE_API_TOKEN", "")

MAX_RETRY_ATTEMPTS = int(os.getenv("MAX_RETRY_ATTEMPTS", "3"))
SANDBOX_BACKEND = os.getenv("SANDBOX_BACKEND", "docker")  # "docker" | "e2b"
