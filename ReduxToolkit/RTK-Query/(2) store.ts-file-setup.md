In our "store.ts" file, we import the exported Api Service and assign a key-value pair in the "reducer" object as;

```
import { jsonPlaceholderApi } from "./services/json.slice";

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});
```

To handle API caching, re-fetching, and request lifecycles (like loading/error states), we must include its middleware in our store configuration just like above.

To enable automatic refetching behaviors in RTK Query, we import "setupListeners" method from "@reduxjs/toolkit/query" and call this method to pass "store.dispatch" as the first param.

```
import { setupListeners } from "@reduxjs/toolkit/query";

setupListeners(store.dispatch);
```

The whole sample code for "store.ts" file looks like;

```
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceholderApi } from "./services/json.slice";

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```