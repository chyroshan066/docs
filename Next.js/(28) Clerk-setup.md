First sign in "https://clerk.com/" and choose the sign in options required in your app. After clicking "Create Application" install clerk in our app using the following command;

```
npm i @clerk/nextjs
```

Then add the API keys provided in your ".env" file;

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aGVscGZ1bC1tYW4tOTguY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_B40wtLSzzWsPoilOE4lMv0MH5JjRV9mecdq7qnsrPX
```

Next create "middleware.ts/middleware.js" file inside your "src" directory and add the following lines of code in it.

```
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

At last, wrap your app with "ClerkProvider" component in your root "layout.tsx/layout.jsx" file as;

```
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
```
