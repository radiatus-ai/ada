project_root/
├── app/
│ ├── **init**.py
│ ├── main.py
│ ├── core/
│ │ ├── **init**.py
│ │ ├── config.py
│ │ ├── security.py
│ │ └── dependencies.py
│ ├── api/
│ │ ├── **init**.py
│ │ ├── api_v1/
│ │ │ ├── **init**.py
│ │ │ ├── endpoints/
│ │ │ │ ├── **init**.py
│ │ │ │ ├── users.py
│ │ │ │ ├── items.py
│ │ │ │ └── orders.py
│ │ │ └── api.py
│ │ ├── api_v2/
│ │ │ ├── **init**.py
│ │ │ ├── endpoints/
│ │ │ │ ├── **init**.py
│ │ │ │ ├── products.py
│ │ │ │ └── categories.py
│ │ │ └── api.py
│ │ └── admin_api/
│ │ ├── **init**.py
│ │ ├── endpoints/
│ │ │ ├── **init**.py
│ │ │ ├── dashboard.py
│ │ │ └── reports.py
│ │ └── api.py
│ ├── models/
│ ├── schemas/
│ ├── crud/
│ └── db/
├── tests/
├── alembic/
├── .env
├── requirements.txt
└── README.md

# Example content for main.py:

from fastapi import FastAPI
from app.core.config import settings
from app.api.api_v1.api import api_router as api_v1_router
from app.api.api_v2.api import api_router as api_v2_router
from app.api.admin_api.api import api_router as admin_api_router

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(api_v1_router, prefix=settings.API_V1_STR)
app.include_router(api_v2_router, prefix=settings.API_V2_STR)
app.include_router(admin_api_router, prefix=settings.ADMIN_API_STR)

# Example content for app/api/api_v1/api.py:

from fastapi import APIRouter
from app.api.api_v1.endpoints import users, items, orders

api_router = APIRouter()
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(items.router, prefix="/items", tags=["items"])
api_router.include_router(orders.router, prefix="/orders", tags=["orders"])

# Similar structure for app/api/api_v2/api.py and app/api/admin_api/api.py
