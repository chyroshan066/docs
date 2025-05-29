To perform query operation, we import the "query" hook that we created and call that hook. The hook is then dereferenced to obtain four values "data", "error", "refetch" and "isLoading".
<br> The sample code is written below.

```
"use client";

import { useGetPostsQuery } from "@/redux/services/json.service"

export const Api = () => {
    const { data, error, isLoading, refetch } = useGetPostsQuery();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error);
        return <p>There's an error</p>;
    }

    console.log(data);
    return <>{data}</>;
}
```

"refetch()" method is called whenever we want to refetch after performing ceratin operation.