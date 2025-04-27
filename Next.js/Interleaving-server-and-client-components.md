Whenever we nest any (both server and client) components inside client component, that component also becomes client component. Therefore, it is a standard practice to make client component as our leaf node or place client component deeper in the tree hierarchy.
<br> During interleaving server and client components, if we place server component inside another server component/ client component inside another client component/ client component inside server component, then that works fine. We won't see any error.
<br> But if we place server component inside client component, then we will get an error because next.js converts that server component into client component by default if it is nested inside a client component. To fix this error, we wrap server component inside client component and pass props as children to be used in the client component.
<br> Wrapping is done in the "page.tsx/page.jsx" file of the route folder where the client component is used.

```
import { ClientComponentOne } from "@/components/ClientComponentOne";
import { ServerComponentTwo } from "@/components/ServerComponentTwo";

export default function Interleaving(){
    return <>
        <h1>Interleaving Page</h1>
        <ClientComponentOne>
            <ServerComponentTwo />
        </ClientComponentOne>
    </>
}
```

Then in client component, we use the children props to display server component. There is no need to import server component.

```
"use client";

import { useState } from "react";

export const ClientComponentOne = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [name, setName] = useState("Batman");

    return <>
        <h1>Client Component One</h1>
        {children}
    </>
}
```
