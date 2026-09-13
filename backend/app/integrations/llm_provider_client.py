"""
Multi-provider LLM client with graceful fallback.

Routing chain: Groq (free tier, low-latency) primary for Planner/Coder/
Debugger -> Google AI Studio (Gemini) on rate-limit -> Hugging Face
Inference API as an open-source-model option. Handles 429 responses
with backoff and automatic fallback to the next provider in the chain,
so the system doesn't assume unlimited throughput from any single
free-tier API.
"""

PROVIDER_CHAIN = ["groq", "gemini", "huggingface"]


class AllProvidersExhaustedError(Exception):
    pass


def complete(prompt: str, agent_name: str = ""):
    """
    Try each provider in PROVIDER_CHAIN in order, retrying with backoff
    on 429s before falling back to the next provider. Raises
    AllProvidersExhaustedError if every provider is rate-limited.
    """
    raise NotImplementedError
