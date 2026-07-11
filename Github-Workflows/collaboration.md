## CONSIDERATIONS DURING GITHUB COLLABORATION

### 1) Create local development configurations:
Next.js explicitly uses ".env.local" for local development configurations. Your main .env or .env.production files are typically tracked by GitHub to set deployment defaults. .env.local is kept inside your .gitignore file so team members don't accidentally override each other's local dev ports when they pull changes.

### 2) 