from fastapi import APIRouter, Depends

from app.api.common.endpoints.tokens import get_db_and_current_user
from app.crud.user import user as crud_user
from app.schemas.user import User

router = APIRouter(
    prefix="/me", tags=["me"], dependencies=[Depends(get_db_and_current_user)]
)


@router.get("", response_model=User)
async def read_users_me(deps: dict = Depends(get_db_and_current_user)):
    current_user = deps["current_user"]
    db = deps["db"]
    default_org = await crud_user.get_default_organization(db, user_id=current_user.id)
    print("current user" * 40)
    print(current_user)
    current_user.organization_id = default_org.id
    return current_user
