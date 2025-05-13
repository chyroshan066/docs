To add local fonts in our next.js project, we first need to download it. It is recommended to download fonts in ".woff2" format.

To download the fonts in ".woff2" format;
<br> 1) Visit "https://gwfh.mranftl.com/fonts"
<br> 2) Select your font (e.g., "Inter") and choose weights/styles.
<br> 3) Download the .woff2 files.

Now create a separate "fonts" folder inside "public" and place all your downloaded fonts inside it.

After that create "fonts.ts/fonts.js" file inside "lib" folder adjacent to "app" directory and import "localFont" helper from "next/font/local". Assign it to a variable and export it. Pass an object to "localFont" helper with keys like "src", "variable", "display" etc.

```
import localFont from  "next/font/local";

export const publicSans = localFont({
    src: [
        {
            path: "../../public/fonts/public-sans-v18-latin-regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../../public/fonts/public-sans-v18-latin-500.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../../public/fonts/public-sans-v18-latin-600.woff2",
            weight: "600",
            style: "normal"
        },
        {
            path: "../../public/fonts/public-sans-v18-latin-700.woff2",
            weight: "700",
            style: "normal"
        },
    ],
    display: 'swap',
    variable: '--font-sans'
});
```

"src" takes an array of objects for each of the font-weight having included "path" to the local file, "font-weight" and "style". (display: "swap") swaps our font during font loading time in the browser instead of showing blank. We define custom name for our font in "variable" key.

To use the font, import the variable in our root "layout.tsx/layout.jsx" file and add it to the "className" of the body tag.
<br> The sample code is written below;

```
import { publicSans } from "../lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

Next.js automatically generates "className" for that specific font. We can apply that "className" to any element.
