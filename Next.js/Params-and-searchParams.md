"params" are the promises that resolves into an object containing dynamic route parameters. The folder name that you define for dyanmic routing can dereferenced and be used to render.
<br> If the folder structure looks like;

![params](../images/params.png)

Then the sample code may be written as;

```
export default async function ArticleDetails({
    params
}: {
    params: Promise<{ articleId: string }>
}){
    const { articleId } = await params;

    return<>
        //body of function
    </>
}
```

Similarly, "searchParams" is a prmoise that resolves to an object containing query parameters. It can be accessed only in "page.tsx/page.jsx" file and not in "layout.tsx/layout.jsx" file. Anything in the URL that comes after "?" can be accessed with "searchParams" parameter.
<br> The sample code is;

```
export default async function ArticleDetails({
    searchParams
}: {
    searchParams: Promise<{ lang?: "en" | "us" | "in" }>
}){
    const { lang } = await searchParams;

    return<>
        //body of function
    </>
}
```

You can also assign a default value in "searchParams" like;

```
const { lang = "en" } = await searchParams;
```

Unike "params", "searchParams" is not necessarily to be strictly bound to any data type. It is always a string.

**Note:** We cannot use "async/await" in client components. To perform such operation in client component, we need to import "use" hook from react.
<br> It can be imported using the following command;

```
import { use } from "react";
```

And now instead of using "await" to wait for the data to be resolved, we can use "use" hook.
<br> In client component, this

```
const { articleId } = await params;
```

is replaced by

```
const { articleId } = use(params);
```

No need to make function "async".

```
export default function ArticleDetails(){}
```

is fine.
