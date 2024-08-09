# Platform

The platform that powers it all.

## Getting Started

Database

In a separate tab, bring up the database.

```
docker compose up database
```

API

```
cd api
poetry install
make start
```

### First-Time Database OR After Model Changes

Only the database needs to be live for this, the api doesn't need to be live.

```
cd api
poetry run alembic upgrade head
```

UI

```
cd ui
npm install
npm start
```

## Deploying To Dev

`make deploy`
