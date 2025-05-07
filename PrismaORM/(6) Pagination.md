For pagination, we have two important keys "skip" and "take". In "skip", we assign the numeric value we want to skip and for "take" we assign the limiting value to be shown at each page.
<br> The sample code is written below;

```
export const fetchAllPosts = async (page: number, limit: number): Promise<Post[]> => {
    const skip: number = (page - 1) * limit;
    const result: Post[] = await prisma.post.findMany({
        skip: skip,
        take: limit,
        orderBy: {
            id: "desc"
        }
    });
    return result;
}
```
