Now, to use the actions defined in "slice.ts/slice.js", we first need to import "useDispatch()" hook from "react-redux" using the following code;

```
import { useDispatch } from "react-redux";
```

Since, we are using "useDispatch" hook, we should also import "AddDispatch" which is the type of dispacth, exported from "store.js/store.ts"
<br> The sample code of which is shown below

```
import { AppDispatch } from "@/reduxToolkit/store";
```

Then we need to import the action-name/thunk-function, that we require which was exported from "slice.ts/slice.js".
<br> The following code is just a demo, how it is done

```
import { addEmployee } from "@/app/reduxToolkit/slice";
```

Since, all the react hooks that performs navigation or dispatch operation does not take any argument, we first need to call "useDispatch" hook without any arguments and assign it to "dispatch" which works as method and accepts, "action" or "thunk function" to be called. The arguments to be passed inside action/thunk function should be in the same manner as defined in "PayloadAction" in "slice.ts/slice.js" file.
<br> The following code justifies it

```
const dispatch = useDispatch<AppDispatch>();
const dataDispatch = () => {
    dispatch(addEmployee({ name: empName }));
};
```

Now, the function defined i.e; "dataDispatch" can be called wherever we want.
