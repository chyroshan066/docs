We can create relationship between various models in prisma using relation mapper (i.e; @relation(...) ) which accepts an object-like structure with key-value pairs, but written in Prisma's schema syntax — without curly braces.
<br> The sample code maps the relation between two models;

```
model User {
  id        Int       @id @default(autoincrement())
  name      String?
  email     String    @unique
  password  String?
  title     String?
  createdAt DateTime  @default(now()) @map("created_at")
  post      Post[]

  @@map("user")
}

model Post {
  id           Int       @id @default(autoincrement())
  title        String
  description  String
  user         User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId       Int       @map("user_id")
  commentCount Int       @default(0) @map("comment_count")
  createdAt    DateTime  @default(now()) @map("created_at")

  @@map("post")
}
```

In the above code, relation-mapper (i.e; @relation(...) ) has various keys;
<br> The value assigned to the "fields" key acts as foreign key in the model.
<br> The value assigned to the "references" key points the primary key in the related model. The foreign key points to the primary key
<br> When we set "onDelete" key to "Cascade", then it deletes the related records automatically.

If we want to get the info of related models also, then in the "include" key, we set that model value to "true"

```
export const fetchUser = async (id: number): Promise<User | null> => {
    const result: User | null = await prisma.user.findUnique({
        where: {
            id: id
        },
        include: {
            post: true
        }
    });
    return result;
}
```

Here, "post" is the related-model and is set to "true".

If we want only certain fields from the model, then we use "select" key and set only those column/field values to true which we want to get.
<br> The sample code is written below;

```
export const fetchUser = async (id: number): Promise<User | null> => {
    const result: User | null = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
        }
    });
    return result;
}
```

And if we want the count of the number of related models, then we select "\_count" key and set those model value to true whose number of counts we want to receive.
<br> This could be better understood with the following example;

```
export const fetchUser = async (id: number): Promise<User | null> => {
    const result: User | null = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            _count: {
                select: {
                    post: true
                }
            }
        }
    });
    return result;
}
```

Doing this, we will receive the number of counts of the "post" model for that particular user.
