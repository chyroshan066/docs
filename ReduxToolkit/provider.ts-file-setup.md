Since, Redux Provider depends on React "Context API" internally. So, at first we need to convert "provider.tsx/provider.js" file into client-component using "use client" directive

```
"use client"
```

Inside "provider.tsx/provider.js" file, we import "Provider" from "react-redux" using the following command;

```
import { Provider } from "react-redux";
```

Then we export our "Providers" component which takes "children" props and wraps that props inside "Provider". This imported "Provider" has "store" attribute which accepts variable exported from "store".
<br> The following code simplifies it.

```
import { store } from "./store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}> {children} </Provider>;
};
```

The minimal setup for "store.ts/store.js" file is written below.

```
"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}> {children} </Provider>;
};
```
