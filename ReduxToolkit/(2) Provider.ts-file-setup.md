Since, Redux Provider depends on React "Context API" internally. So, at first we need to convert "provider.tsx/provider.js" file into client-component using "use client" directive

```
"use client"
```

We need to call "setupListeners" for automatic refetching. For that we first need to import "setupListeners" from "@reduxjs/toolkit/query". We also need to import "makeStore" function from "store.ts" file and create the reference of "makeStore".
<br> The sample code is written below;

```
import { setupListeners } from "@reduxjs/toolkit/query";
import { AppStore, makeStore } from "./store";
import { useRef } from "react";

export const Providers = () => {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
        setupListeners(storeRef.current.dispatch);
    }
}
```

Inside "provider.tsx/provider.js" file, we import "Provider" from "react-redux" using the following command;

```
import { Provider } from "react-redux";
```

Then we export our "Providers" component which takes "children" props and wraps that props inside "Provider". This imported "Provider" has "store" attribute which accepts variable exported from "store".
<br> The following code simplifies it.

```
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={storeRef.current}> {children} </Provider>;
};
```

The minimal setup for "store.ts/store.js" file is written below.

```
"use client";

import { Provider } from "react-redux";
import { AppStore, makeStore } from "./store";
import { useRef } from "react";
import { setupListeners } from "@reduxjs/toolkit/query";

export const Providers = ({
    children
}: {
    children: React.ReactNode
}) => {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
        setupListeners(storeRef.current.dispatch);
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}
```
