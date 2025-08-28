If you want to add vercel web analytics to your project, you first need to install "@vercel/analytics" in your root project as;

```
npm i @vercel/analytics
```

After that in your root "layout.tsx" file, import "Analytics" from "@vercel/analytics/react" and add the imported component inside "body" tag just below the "children" props as;

```
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

If you want to remove private data from the URL in analytics, then use "beforeSend" attribute of analytics and handle the logic accordingly.
<br> The sample code is written below;

```
<Analytics beforeSend={e => {
    // if URL includes private then don't proceed with the analytics
    if (e.url.includes("private")) return null;
    return e;   
    }} 
/>
```

Similarly if you want to remove secret from the URL in analytics then

```
<Analytics beforeSend={e => {
    // if URL includes secret then delete the secret in analytics
    const url = new URL(e.url);
    url.searchParams.delete("secret");
    return {
        ...e,
        url: url.toString(),
    }  
    }} 
/>
```

For development mode, you may not want to log the events of analytics in console. In that case, we have the option of disable debug;

```
<Analytics debug={false} />
```