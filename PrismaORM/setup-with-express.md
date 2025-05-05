First install "Prisma" as dev dependency using the following command;

```
npm i prisma --save-dev
```

Then set up your Prisma ORM project using the following command;

```
npx prisma init
```

This command creates a new directory called "prisma" that contains a file called "schema.prisma", which contains the Prisma Schema with your database connection variable and schema models.
<br> It also create a ".env" file in the root directory of the project.

Then import "@prisma/client" using the following command;

```
npm i @prisma/client
```

After that create a separate "prisma.ts" file inside your "db" folder adjacent to "index.ts" file and initialize prisma using the "PrismaClient" class. And hence, export that object as;

```
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ["query"],
})
```
