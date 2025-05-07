To prevent unintended usage of client side code in server component, we use "client-only" package.
<br> Firstly, we need to install this package using the following command;

```
npm i client-only
```

Then we mark the code as client only by importing that package at the top of the file as;

```
import "client-only";
```

Now this prevents the usage of client-code in server-side component.
