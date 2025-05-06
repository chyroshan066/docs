To create model in prisma, go to the "schema.prisma" file located inside the "prisma" folder and create the model as you require.
<br> The sample code for model in "prisma" looks-like;

```
model User {
  id         Int      @id @default(autoincrement())
  name       String?
  email      String   @unique
  password   String?
  created_at DateTime @default(now())
}
```

To generate "migrations" folder and create table in the database, invoke the following command;

```
npx prisma migrate dev --name <migration_name>
```

The "migrations" folder tracks the changes you made in the model.
