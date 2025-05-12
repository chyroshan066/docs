For reading session and user data in server component, we read "auth()" and "currenUser()" helper. But first we need to import them from "@clerk/nextjs/server" and await them as;

```
import { auth, currentUser } from "@clerk/nextjs/server";

const authObj = await auth();
const userObj = await currentUser();
```

The "auth()" helper will return the auth object of the currently active user. And "currentUser()" helper will return the backend user object of the currently active user.

Similarly for reading session and user data in client component, we read "useAuth()" and "useUser()" hook from "@clerk/nextjs". But before that we need to import them as;

```
import { useAuth, useUser } from "@clerk/nextjs";

const authObj = useAuth();
const userObj = useUser();
```
