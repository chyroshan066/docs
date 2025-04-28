To retrieve the state from the store to display in our components, we use "useSelector" hook.
<br> First we should import "useSelector" hook from "react-redux" using the following command;

```
import { useSelector } from "react-redux";
```

Since, we are using react hook, the component must be client component and the way to make it is by using "use client" directive;

```
"use client";
```

We assign a variable to the "useSelector" hook by calling it which accepts function that returns the initial state or the nested key-value pair inside that state.

```
const employeeData = useSelector((data) => data.employee.employees);
```

Here, the props (i.e; "data") directly points to the "reducer" key inside our "store.ts/store.js" file and the nested key inside the "reducer" points to the initial state of the respective "slice.ts/slice.js" file.
<br> Now that variable can be used to display in our UI.
<br> The minimalistic code for retrieving data from the store and displaying in our UI is shown below;

```
"use client";

import { useSelector } from "react-redux";

export const ShowEmployees = () => {
  const employeeData = useSelector((data) => data.employee.employees);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Show Employees</h2>
      {employeeData.map((item) => (
        <h4 key={item.id}>{item.name}</h4>
      ))}
    </div>
  );
};
```
