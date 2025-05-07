For navigating programmatically in next.js, we have two options
<br> Firstly, we can use "useRouter" hook from "next/navigation" which provides us with various options/functions.
<br> It can be imported using the following command;

```
import { useRouter } from "next/navigation";
```

After importing, define a variable inside the export function as;

```
const router = useRouter();
```

Now, you're ready to use.
<br> If you want normal page transitions, add the page transition to the history and want to go back, then use "push" function

```
router.push("/about");
```

If you want auto-redirects login flows, doesn't wanna add it to the history and don't wanna go back, then use "replace" function

```
router.replace("/about");
```

If you want to go back to the previous page, then use "back" function

```
router.back();
```

If you want to move to the next page, then use "forward" function

```
router.forward();
```

Second option for navigating programmatically is using "redirect" hook from "next/navigation"
<br> Import it using the following command;

```
import { redirect } from "next/navigation";
```

Now you can simply use, no need to define a variable like in the case of "useRouter" hook.

```
redirect("/profile")
```
