To create model in prisma, go to the "schema.prisma" file located inside the "prisma" folder and create the model as you require.
<br> The sample code for model in "prisma" looks-like;

```
model User {
  id        Int      @id @default(autoincrement()) // @id means primary-key
  name      String?
  email     String   @unique
  password  String?
  title     String?
  createdAt DateTime @default(now()) @map("created_at")

  @@map("user")
}
```

We use "@map()" function to change the column name in PostgreSQL database.
<br> Also we use "@@map()" function to change the table name in PostgreSQL Database.

To generate "migrations" folder and create table in the database, invoke the following command;

```
npx prisma migrate dev --name <migration_name>
```

The "migrations" folder tracks the changes you made in the model.
