In "slice.js/slice.ts" we define both "reducer" and "actions".
<br> Firstly we import "createSlice", "PayloadAction" and "nanoid" from "@reduxjs/toolkit" using the following command;

```
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
```

Importing "nanoid" is optional but is preferred. "nanoid" returns string.
<br>Then we define, initial state for our payload as;

```
type MyData = {
  id: string;
  name: string;
};

type MyState = {
  employees: MyData[];
};

const initialState: MyState = {
  employees: [],
};
```

After that we create "Slice" variable by calling "createSlice" method, which takes objects. The necessary element to be defined inside "createSlice" includes "name", "initial state" and "reducers". "reducers" itself is an object which has action-name as keys and each value is a reducer function. Each reducer function has two props, "state" and "action". While using typeScript, it is not necessary to define the data type of "state" but we need to define the data type of "action". The data type of "action is "PayloadAction\<T\>" where T is generic. We can only pass the necessary data types of the values we use (no need to pass the whole data type of the element in initial state)
<br> The demo example is shown below;

```
const Slice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<{ name: string }>) => {
      const data: MyData = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.employees.push(data);
    },
  },
});
```

Now, we can export our "actions" and "reducer". The standard approach always uses named export for both "reducer" and "actions". The required action-name must be destructured and exported. We don't destructure "reducer" during export because it is a function however "actions" are objects.
<br> This can be better understood with the following code;

```
export const { addEmployee } = Slice.actions;
export const employeeReducer = Slice.reducer;
```

The whole code for "slice.ts" is written below;

```
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type MyData = {
  id: string;
  name: string;
};

type MyState = {
  employees: MyData[];
};

const initialState: MyState = {
  employees: [],
};

const Slice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<{ name: string }>) => {
      const data: MyData = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.employees.push(data);
    },
  },
});

export const { addEmployee } = Slice.actions;
export const employeeReducer = Slice.reducer;
```
