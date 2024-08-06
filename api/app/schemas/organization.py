from pydantic import UUID4, BaseModel


class OrganizationBase(BaseModel):
    name: str
    is_user_default: bool = False


class OrganizationCreate(OrganizationBase):
    pass


class OrganizationUpdate(BaseModel):
    name: str | None = None


class Organization(OrganizationBase):
    id: UUID4

    class Config:
        from_attributes = True
