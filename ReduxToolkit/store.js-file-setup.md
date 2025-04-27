Inside "store.ts/store.js", we import "configureStore" from "@reduxjs/toolkit" using the following command;

```
import { configureStore } from "@reduxjs/toolkit";
```

Then we export a variable (Eg: store) which uses the imported "configureStore" that takes object as argument. Inside that object, we define "reducer".
<br> The following code simplifies it.

```
export const store = configureStore({
  reducer: {},
});
```

The minimal setup for "store.ts/store.js" file is written below.

```
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```
