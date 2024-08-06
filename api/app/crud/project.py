from typing import List

from sqlalchemy import and_
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.crud.base import CRUDBase
from app.models.project import Project
from app.models.user import User, UserOrganization
from app.schemas.project import ProjectCreate, ProjectUpdate


class CRUDProject(CRUDBase[Project, ProjectCreate, ProjectUpdate]):
    async def create_project(
        self, db: AsyncSession, *, obj_in: ProjectCreate, auto_commit=True
    ) -> Project:
        obj_in_data = obj_in.dict()
        obj_in_data["organization_id"] = (
            UUID(obj_in_data["organization_id"])
            if isinstance(obj_in_data["organization_id"], str)
            else obj_in_data["organization_id"]
        )
        db_obj = self.model(**obj_in_data)
        db.add(db_obj)
        await db.flush()
        await db.refresh(db_obj)
        # this actually causes problems, these should prob default false
        if auto_commit:
            await db.commit()
        return db_obj

    async def list_projects_for_user(
        self, db: AsyncSession, *, user: User, skip: int = 0, limit: int = 100
    ) -> List[Project]:
        query = (
            select(Project)
            .join(Project.organization)
            .join(
                UserOrganization,
                UserOrganization.organization_id == Project.organization_id,
            )
            .where(
                and_(
                    UserOrganization.user_id == user.id,
                    UserOrganization.organization_id == Project.organization_id,
                )
            )
            .offset(skip)
            .limit(limit)
        )
        result = await db.execute(query)
        return result.scalars().all()

    async def update_project(
        self, db: AsyncSession, *, db_obj: Project, obj_in: ProjectUpdate
    ) -> Project:
        # If you need specific logic for project update, implement it here
        # Otherwise, you can just call the parent's update method
        return await super().update(db, db_obj=db_obj, obj_in=obj_in)

    async def delete_project(self, db: AsyncSession, *, id: int) -> Project:
        # If you need specific logic for project deletion, implement it here
        # Otherwise, you can just call the parent's remove method
        return await super().remove(db, id=id)


project = CRUDProject(Project)
