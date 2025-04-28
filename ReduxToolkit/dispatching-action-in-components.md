Now, to use the actions defined in "slice.ts/slice.js", we first need to import "useDispatch()" hook from "react-redux" using the following code;

```
import { useDispatch } from "react-redux";
```

Then we need to import the action-name/thunk-function, that we require which was exported from "slice.ts/slice.js".
<br> The following code is just a demo, how it is done

```
import { addEmployee } from "@/app/reduxToolkit/slice";
```

Since, all the react hooks that performs navigation or dispatch operation does not take any argument, we first need to call "useDispatch" hook without any arguments and assign it to "dispatch" which works as method and accepts, "action" or "thunk function" to be called.
<br> The following code justifies it

```
const dispatch = useDispatch();
const dataDispatch = () => {
    dispatch(addEmployee(empName));
};
```

Now, the function defined i.e; "dataDispatch" can be called wherever we want.
