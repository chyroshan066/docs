We fetch REST API data using "axios". For that we first need to install "axios" using the following command;

```
npm i axios
```

After that create a separate "api" folder inside your "src" directory. Inside "api" folder, create "axiosClient.ts/axiosClient.js" file and setup your axios instance here. We first need to import "axios" from "axios" and setup baseURL here.
<br> The sample code for that file is written below;

```
import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});
```

Now create another file within "api" folder and perform fetching operation there based on different methods (like; "get", "post", "put" etc.). Perform data fetching inside the function and return that to increase reusability.
<br> The sample code is written below;

```
import { axiosClient } from "./axiosClient"

export const getUsers = () => {
    return axiosClient.get("users");
}
```

Since, we defined "baseURL" in our "axiosClient.ts/axiosClient.js" file, so we don't need to provide complete path but instead the relative path from that URL.

Now within "api" folder, create "index.ts" file and barrel export all functions related to data fetching as;

```
export * from "./userAPI";
```

Now, import the functions to fetch data and handle according to your requirement.

Data fetching in client component must be handled using "useEffect" and "useState" hook since, the client-component function can't be "async".

```
"use client";

import { getUsers } from "@/api";
import { APIUers } from "@/types/user.type";
import { useEffect, useState } from "react"

export default function Users() {
    const [data, setData] = useState([]);

    const handleFetching = async () => {
        try {
            const res = await getUsers();
            setData(res.data);
            console.log(data);
        } catch (err: Error) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        handleFetching();
    }, [])

    useEffect(() => {
        console.log("Current data state:", data);
    }, [data]);

    return <>
        {data.map((user: APIUers) => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <h2>{user.phone}</h2><br />
            </div>
        ))}
    </>
};
```

Since, the function in server-component can be made "async" so, there is no need to use "useEffect" and "useState" hook for data fetching. It can be simply fetched as;

```
import { getUsers } from "@/api";
import { APIUers } from "@/types/user.type";

export default async function apiServer() {
    try {
        const { data } = await getUsers();

        return <>
            {data.map((user: APIUers) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.phone}</h2><br />
                </div>
            ))}
        </>
    } catch (err) {
        console.log(err);
    }
};
```
