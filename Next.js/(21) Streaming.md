Streaming is a strategy that allows progressive UI rendering from the server. If within the same route, any one of the component makes delay to render, than the user can't see that page and have to wait until that component gets loaded even though other components have already loaded. To fix this problem, we use "Suspense" to wrap our slower components. This allows the client to view the loaded content while the slower content take their own time to load.
<br> First, we need to import "Suspense" from react

```
import { Suspense } from "react";
```

"Suspense" has fallback attribute that takes component which should be rendered while the slower component is loading.
<br> The sample code of which is written below;

```
export default function Reviews(){
    return <>
        <h1>We are in review page</h1>
        <Suspense  fallback={<p>Loading product details...</p>}>
            <ProductComponent/>
        </Suspense>
        <Suspense  fallback={<p>Loading reviews...</p>}>
            <ReviewComponent />
        </Suspense>
    </>
}
```

In the above example, "ProductComponent" and "ReviewComponent" are slower components which are wrapped by "Suspense"
