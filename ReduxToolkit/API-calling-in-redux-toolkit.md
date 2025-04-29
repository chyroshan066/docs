Fetching an API is an asynchronous process, and to handle asynchronous function/operation in redux toolkit, we first need to import "createAsyncThunk" from "@reduxjs/toolkit" in our "slice.ts/slice.js" file

```
import { createAsyncThunk } from "@reduxjs/toolkit";
```

After that we call "createAsyncThunk" method and assign it to a variable. "createAsyncThunk" takes two arguments; first is the "name" and second is an asynchronous function for fetching API. Inside that function we fetch API and must return payload.
<br> The sample code is written below;

```
export const apiData = createAsyncThunk("apiData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});
```

We need to define "isLoading", "error" and our state variable that changes in initial state. For initial condition, "isLoading" is set to false, "error" is set to null and our state variable would be empty.
<br> The sample code looks like;

```
const initialState: EmployeeState = {
  isLoading: false,
  isError: null,
  employeesAPIData: [],
};
```

After that we define "extraReducers" key which is inside "createSlice" object. The value of "extraReducers" is a function which has "builder" as a props. We define 3 cases for our "builder" here. Those are "pending", "fulfilled" and "rejected". Those cases are handled by calling "addCase" method in builder. The "addCase" method takes two props, one is "case" and another is function which can accept two props; "state" and "action" like any other reducer function.
<br> The sample code is written below;

```
extraReducers: (builder) => {
    builder.addCase(apiData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(apiData.rejected, (state, action) => {
      state.isError = action.error;
      state.isLoading = false;
    });
    builder.addCase(apiData.fulfilled, (state, action) => {
      state.employeesAPIData = action.payload;
      state.isLoading = false;
    });
  },
```

In the above code, "apiData" is the variable which was assigned by calling "createAsyncThunk" and not the name inside "createAsyncThunk". We perform operation in each of the cases according to our requirement. Of course, during "pending", we change the value of "isLoading" to true. The first case to happen is "pending" case, after which "rejected" or "fulfilled" any case may occur based on the API response, so we must change the value of "isLoading" to false in both of the cases. We can assign "action.error" to our error value if it is rejected. And in fulfilled case, we assign the "action.payload" value to our state varaible.

Now we need to import the exported function/variable which we assigned to "createAsyncThunk" method in the component/page, where we gonna display our API data in the UI.
<br> The sample code looks like;

```
import { apiData } from "@/reduxToolkit/slice/employeeSlice";
```

We also need to render our "dispatch" method based on the requirement using "useEffect" hook. In that file, we handle the logic according to our needs.
<br> For that we need to import the "useEffect" hook as;

```
import { useEffect } from "react";

useEffect(() => {
        dispatch(apiData());
    }, [])
```

The whole sample code inside "slice.ts" looks like;

```
import { Data, EmployeeState } from "@/types/employeeTypes";
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";

const initialState: EmployeeState = {
  isLoading: false,
  isError: null,
  employeesAPIData: [],
};

export const apiData = createAsyncThunk("apiData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

const Slice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {...........},
  extraReducers: (builder) => {
    builder.addCase(apiData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(apiData.rejected, (state, action) => {
      state.isError = action.error;
      state.isLoading = false;
    });
    builder.addCase(apiData.fulfilled, (state, action) => {
      state.employeesAPIData = action.payload;
      state.isLoading = false;
    });
  },
});

export const { ..... } = Slice.actions;
export const employeeReducer = Slice.reducer;
```

The whole sample code for component/page.tsx file may look like;

```
"use client";

import { apiData } from "@/reduxToolkit/slice/employeeSlice";
import { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function APIData(){
    const dispatch = useDispatch<AppDispatch>();
    const { employeesAPIData, isLoading, error} = useSelector((state: RootState) => state.employee);

    useEffect(() => {
        dispatch(apiData());
    }, [])

    return (
        isLoading? (
            <p>Loading....</p>
        ): error? (
            <p>Error...</p>
        ): employeesAPIData.length > 0 ? (
                employeesAPIData.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))
        ): (
        <p>No data found</p>
        )
    )
}
```
