Inside "store.ts/store.js", we import "configureStore" from "@reduxjs/toolkit" using the following command;

```
import { configureStore } from "@reduxjs/toolkit";
```

Then we export a variable (Eg: store) which uses the imported "configureStore" that takes object as argument. Inside that object, we define "reducer". If the "reducer" is exported with the same name as "reducer" from "slice.ts/slice.js", then we can write reducer as a single variable (No need to define key-value pair). Just like

```
export const store = configureStore({
  reducer
});
```

But if the "reducer" is exported with the different name from "slice.ts/slice.js", then we must define reducer as an object with key-value pair. Just like

```
export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  }
});
```

The minimal setup for "store.ts/store.js" file is written below.

```
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  }
});
```
