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

Then install "@prisma/client" using the following command;

```
npm i @prisma/client
```

After that create "prisma.ts" file inside your "db" folder adjacent to "index.ts" file and initialize an object using the "PrismaClient" class. And hence, export that object as;

```
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ["query"],
})
```

Also, in your ".env" file, provide the proper database url;

```
DATABASE_URL="postgresql://postgres:pw1234@localhost:5432/prismaDB?schema=public"
```

Here, "postgresql" refers to the database you are using.
<br> "postgres" refers to the username of your database
<br> "pw1234" refers to the password you set
<br> "localhost" refers to host name
<br> "5432" refers to the port name
<br> And "prismaDB" refers to database name

Go to the "schema.prisma" file inside "prisma" folder and configure "generator Client" to be;

```
generator client {
  provider = "prisma-client-js"
}
```

We just deleted "output" key value pair from the "client" generator.

Lastly, in your "package.json" file add the following scripts;

```
"scripts": {
  "prisma:generate": "prisma generate",
  "postprisma:generate": "shx cp -r node_modules/.prisma/client/index.d.ts ../client/src/types/prismaTypes.d.ts",
}
```

The "postprisma:generate" generate the prisma types in the frontend.