For protecting routes, we first need to import "createRouteMatcher" from "@clerk/nextjs/server" in our "middleware.ts" file as;

```
import { createRouteMatcher } from '@clerk/nextjs/server';
```

Then we need to define which routes should be public by calling "createRouteMatcher()" method and passing the routes as an array.
<br> The sample code is writte below;

```
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
```

Here "/sign-in(._)" and "/sign-up(._)" catches all routes after "/sign-in" and "/sign-out".

After that in our in "clerkMiddleware()", we need to pass an async function which takes two arguments "auth" and "req" and protect all the routes except for the public routes defined by using "auth.protect()"
<br> The sample code is written below;

```
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware( async (auth, req) => {
  if (!isPublicRoute(req)){
    await auth.protect();
  }
});
```
