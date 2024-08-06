from typing import Optional

from fastapi import Depends, Request
from opentelemetry import trace
from opentelemetry.trace.propagation.tracecontext import TraceContextTextMapPropagator
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.logger import get_logger
from app.core.security import get_current_user
from app.db.session import get_db
from app.models.user import User

logger = get_logger(__name__)


async def get_trace_context(request: Request) -> Optional[trace.SpanContext]:
    carrier = {}
    for key, value in request.headers.items():
        carrier[key.lower()] = value

    ctx = TraceContextTextMapPropagator().extract(carrier=carrier)
    span = trace.get_current_span(ctx)
    return span.get_span_context() if span else None


async def get_db_and_current_user(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
    trace_context: Optional[trace.SpanContext] = Depends(get_trace_context),
):
    return {"db": db, "current_user": current_user, "trace_context": trace_context}
