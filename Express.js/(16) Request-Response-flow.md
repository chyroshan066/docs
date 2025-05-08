The actual request flow (top to bottom) looks-like;

```
Client (HTTP request)
    ↓
index.ts / main.ts       Entry point – starts the server
    ↓
app.ts (Express app)     Configures middleware, routes, global settings
    ↓
routes/                  Maps endpoints to controllers & validation middleware
    ↓
middlewares/             Runs before controller (e.g., auth, validation, logging)
    ↓
schemas/                 Used inside middleware for input validation (e.g., Zod)
    ↓
controllers/             Receives valid data, calls services
    ↓
services/                Contains business logic, calls repositories
    ↓
repositories/            Interacts with database (via Prisma/ORM/SQL)
    ↓
Database
```

The actual response flow (bottom to top) looks-like;

```
repositories → services → controllers → routes → response sent to client
```
