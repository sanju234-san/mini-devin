"""
Multi-provider LLM client with graceful fallback.

Routing chain: Groq (free tier, low-latency) primary for Planner/Coder/
Debugger -> Google AI Studio (Gemini) on rate-limit -> Hugging Face
Inference API as an open-source-model fallback.
"""

from __future__ import annotations

import logging
import time
from typing import Any

from groq import Groq
import google.generativeai as genai
from huggingface_hub import InferenceClient

from app.config import GROQ_API_KEY, GOOGLE_AI_STUDIO_API_KEY, HUGGINGFACE_API_TOKEN

logger = logging.getLogger(__name__)

PROVIDER_CHAIN = ["groq", "gemini", "huggingface"]

class AllProvidersExhaustedError(Exception):
    """Raised when all configured LLM providers fail or are rate-limited."""
    pass

def _call_groq(prompt: str) -> str:
    if not GROQ_API_KEY:
        raise RuntimeError("GROQ_API_KEY not configured")
    client = Groq(api_key=GROQ_API_KEY)
    chat_completion = client.chat.completions.create(
        messages=[{"role": "user", "content": prompt}],
        model="llama3-70b-8192",
    )
    return chat_completion.choices[0].message.content

def _call_gemini(prompt: str) -> str:
    if not GOOGLE_AI_STUDIO_API_KEY:
        raise RuntimeError("GOOGLE_AI_STUDIO_API_KEY not configured")
    genai.configure(api_key=GOOGLE_AI_STUDIO_API_KEY)
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text

def _call_huggingface(prompt: str) -> str:
    if not HUGGINGFACE_API_TOKEN:
        raise RuntimeError("HUGGINGFACE_API_TOKEN not configured")
    client = InferenceClient(token=HUGGINGFACE_API_TOKEN)
    # Using a general purpose capable model
    response = client.text_generation(prompt, model="mistralai/Mistral-7B-Instruct-v0.2", max_new_tokens=2048)
    return response

def complete(prompt: str, agent_name: str = ""):
    """
    Try each provider in PROVIDER_CHAIN in order, falling back on 429s or server errors.
    """
    provider_map = {
        "groq": _call_groq,
        "gemini": _call_gemini,
        "huggingface": _call_huggingface,
    }

    for provider in PROVIDER_CHAIN:
        try:
            logger.info("Attempting LLM completion via %s [agent=%s]", provider, agent_name)
            return provider_map[provider](prompt)
        except Exception as e:
            # We catch all exceptions to ensure fallback happens.
            # In a production system, we'd specifically check for 429s/5xxs.
            logger.warning("Provider %s failed: %s. Trying next fallback...", provider, e)
            continue

    raise AllProvidersExhaustedError("All available LLM providers failed or are misconfigured.")
