If you want some of the dynamic pages/routes to be pre-built as static page because it is frequently visited (Eg: Featured Products) and you want to increase the speed of your app, then we use the concept of "generateStaticParams".
<br> "generateStaticParams" is an async function that returns an array of objects, which takes the key value as dynamic route of which you want to generate static content. During build time, it creates a static HTML file for the routes, which assigned as value to the key. The sample code is written below;

```
export function generateStaticParams(){
    return [
        {productId: "book"},
        {productId: "copy"},
        {productId: "pen"},
    ]
}

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: string }>
}){
    const productId = (await params).productId;

    return <h1>Details about product {productId} at time {new Date().toLocaleTimeString()}</h1>
}
```

**Note:** "generateStaticParams" function must be used in the "page.tsx/page.jsx" file of the dynamic-route folder for which you are generating static content.
