First of all, the states in redux-toolkit is immutable (i.e; can be read only). So, while saving our data in "localStorage" or "sessionStorage" or "cookies", we need to use "current" method by importing it from "@reduxjs/toolkit".

```
import { current } from "@reduxjs/toolkit";
```

Then while saving the value in our localStorage, we need to use "current" method and pass the data we want to save. But if we are creating actions in our "slice.ts/slice.js" file, we must specify that we are saving it in client browser. So, for that we use conditional statement
<br> The sample code is written below;

```
if (typeof window !== "undefined"){
    const empData = JSON.stringify(current(state.employees));
    localStorage.setItem("emp", empData);
}
```

In browser, the typeof window is "object" and in server it is string literal which returns "undefined". So, if the typeof window doesn't return "undefined" string, then we are in browser, so we can save our data in localStorage.
<br> **Note:** after using array methods like "filter" which returns a new array, we don't need to use "current" method to make that array mutable. Those methods itself returns a mutable array.

We cannot directly access browser-only APIs like "localStorage", "window", "document" during server-side rendering. Therefore to read/get the "localStorage" data, we use "useEffect" hook in our client-component (i.e; either page.tsx/page.jsx or component.tsx/component.jsx) and dispatch actions to our redux slices.
<br> A demo example is written below;

```
const dispatch = useDispatch<AppDispatch>();
useEffect(() => {
    const empData = localStorage.getItem("emp")
    if(empData)
        dispatch(setEmployee(JSON.parse(empData)));
}, [dispatch])
```

**Note:** When saving data to any storage, it must be of string. So, we use "JSON.stringify()" method and pass the variable to be converted to string before saving it to any storage. And to retrieve/get data from the database in order to work with it, we convert that string data to an object using "JSON.parse()" method.
<br> While fetching API, we convert that data to object using "response.json()" method.
