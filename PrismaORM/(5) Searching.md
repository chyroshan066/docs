To perform search operations in prisma, first update the "previewFeatures" block in your "generator Client" to include the "fullTextSearchPostgres" preview feature flag as:

```
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearchPostgres"]
}
```

Then run the following command in your terminal to generate new "search" field in your model;

```
npx prisma migrate dev --name <migration_name>
```

After that add "search" field in the column/data field where you want to perform search operation.
<br> The sample code is written below;

```
await prisma.post.findMany({
    where: {
        description: {
            search: searchParams
        }
    }
});
```

Now you can write any query and perform search operation.
