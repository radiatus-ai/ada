from api.ada.v1.endpoints import (
    chat_messages,
    chats,
    credentials,
    live,
    projects,
)
from api.common.endpoints import (
    auth,
    me,
)
from fastapi import APIRouter, Depends

# tokens,
from app.core.dependencies import get_db_and_current_user

api_router = APIRouter(dependencies=[Depends(get_db_and_current_user)])
api_router.include_router(chat_messages.router)
api_router.include_router(chats.router)
api_router.include_router(credentials.router)
api_router.include_router(live.router)
api_router.include_router(projects.router)
api_router.include_router(auth.router)
api_router.include_router(me.router)
# api_router.include_router(tokens.router)

base_router = APIRouter()


@base_router.get("/", dependencies=[])
async def root():
    return "healthy"
