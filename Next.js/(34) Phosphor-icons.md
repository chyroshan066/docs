To use phosphor icons in our app, we first need to install the library.
<br> We can install phosphor icons library using the following command;

```
npm i @phosphor-icons/react
```

Then you can simply use it as a component by importing and calling it. Note that to use the phosphor-icons the our next.js component must be a client component.
<br> The sample code is written below;

```
"use client";

import { AddressBookTabs } from "@phosphor-icons/react"

export const Icons = () => {
    return <>
        <AddressBookTabs size={32} />
    </>
}
```
