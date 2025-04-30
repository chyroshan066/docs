The production grade node.js folder structure would look-like;

```
project-root/
│
├── src/                    # All source code lives here
│   ├── config/             # Configuration files (env, database config, etc.)
│   ├── controllers/        # Request handlers (business logic)
│   ├── models/             # Database models or schema definitions
│   ├── routes/             # Express route definitions
│   ├── middlewares/        # Custom Express middlewares
│   ├── services/           # Business logic, helpers, and reusable modules
│   ├── utils/              # Utility functions (formatters, validators, etc.)
│   ├── types/              # Custom TypeScript type definitions
│   ├── index.ts            # Entry point of the app
│
├── dist/                   # Compiled JS code (auto-generated)
│
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflow files
│
├── .env                    # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
```
