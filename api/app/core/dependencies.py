from typing import Optional

import httpx
from fastapi import Depends, HTTPException, Request
from opentelemetry import trace
from opentelemetry.trace.propagation.tracecontext import TraceContextTextMapPropagator
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.logger import get_logger
from app.db.session import get_db

logger = get_logger(__name__)


async def get_trace_context(request: Request) -> Optional[trace.SpanContext]:
    carrier = {}
    for key, value in request.headers.items():
        carrier[key.lower()] = value

    ctx = TraceContextTextMapPropagator().extract(carrier=carrier)
    span = trace.get_current_span(ctx)
    return span.get_span_context() if span else None


async def get_current_user(request: Request):
    token = request.headers.get("Authorization")
    if not token:
        raise HTTPException(status_code=401, detail="No authorization token provided")

    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{settings.AUTH_SERVICE_URL}/api/verify-token",
            json={"token": token.split()[1]},  # Assuming 'Bearer' token
        )

    if response.status_code != 200:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    return response.json()["user"]


async def get_db_and_current_user(
    request: Request,
    db: AsyncSession = Depends(get_db),
    current_user: dict = Depends(get_current_user),
    trace_context: Optional[trace.SpanContext] = Depends(get_trace_context),
):
    return {"db": db, "current_user": current_user, "trace_context": trace_context}
