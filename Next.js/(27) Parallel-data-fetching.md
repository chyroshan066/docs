If we want to fetch multiple APIs, then we have two options; sequential data fetching and parallel data fetching. In sequential data fetching, we have to wait for one fetch operation to complete and is time consuming. However, in parallel data fetching, we can fetch multiple APIs at the same time concurrently and doesn't take much time.

For parallel data fetching, we use "Promise.all()" method which requires an array of promises as input. The resolved values are returned in the same order as the input Promises in the form of array.
<br> The sample code is written below;

```
// In "userAPI.ts" file;
export const getAlbums = async () => {
    return await axiosClient.get(`albums`);
}

export const getPosts = async () => {
    return await axiosClient.get(`posts`);
}

// In "component.tsx" file;
const [posts, albums] = await Promise.all([getPosts(), getAlbums()]);
```
