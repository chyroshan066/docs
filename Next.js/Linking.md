In next and react, we don't use anchor tag (<a href=""></a>), instead we use link tag (<Link href=""></Link>). But it can't be used directly, we first need to import "Link" from the next using the following command;

```
import Link from "next/link";
```

In the "Link" tag, if we add "replace" attribute and on going back, we are directly redirected to the home page, no matter what our previous route was.

```
<Link href="/about" replace>About</Link>
```
