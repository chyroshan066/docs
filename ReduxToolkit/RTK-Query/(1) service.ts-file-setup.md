To fetch API using RTK Query, first create a new file say "api.service.ts" inside "services" folder within "redux" directory, and then import "createApi" and "fetchBaseQuery" method from "@reduxjs/toolkit/query/react" as;

```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
```

Now call "createApi" method and assign it to a variable and export it.

```
export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({ query: () => "posts" }),
        createPost: builder.mutation<Post, Partial<Post>>({
            query: (newPost) => ({
                url: "posts",
                method: "POST", 
                body: newPost,
            }),
        }),
    }),
});
```

Inside "createApi" method, pass an object with three keys i.e; "reducerPath", "baseQuery" and "endpoints".
<br> We assign any name to the "reducerPath" and the same name should be called in our redux store.
<br> Call "fetchBaseQuery" method in "baseQuery" and pass the base URL value in "baseUrl" key of the object.
<br> In "endpoints" key, pass the callback function with "builder" props. This callback function returns hooks that you create. We use "builder.query()" method for fetching data and "builder.mutation()" method for modifying the data. Whatever operation, we are going to perform using "builder.query()" or "builder.mutation()" method, we must perform it by assigning the callback function to the "query" key. The callback function of the "query" key in "mutation" method, must return an object with three keys i.e; "url"; the URL where you are performing this operation, "method"; the method you are using and "body", the data you are passing.

After that we export the hook, we created as;

```
export const { useGetPostsQuery, useCreatePostMutation } = jsonPlaceholderApi;
```

Note that, we must add "use" prefix before the hook name and follow camelCase syntax. Also after the hook name we created, we must specify whether the hook is query or mutation by adding "Query" or "Mutation" as a suffix.

On changing the tab, if we want to refetch the data, then we have another key i.e; "refetchOnFocus" which on setting to true refetches the data whenever the user changes the tab like;

```
export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({ query: () => "posts" }),
    }),
});
```

The whole sample code for "api.service.ts" file looks-like;

```
import { Post } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({ query: () => "posts" }),
        createPost: builder.mutation<Post, Partial<Post>>({
            query: (newPost) => ({
                url: "posts",
                method: "POST", 
                body: newPost,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useCreatePostMutation } = jsonPlaceholderApi;
```