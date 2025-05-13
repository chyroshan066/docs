The custom colors, fonts etc. are defined in our "global.css"/"app.css" file where "tailwindcss" is imported. We define those colors/fonts inside "@theme" directive as;

```
@theme {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-transparent: transparent;

  --font-sans: "Public Sans";
}
```

**Note:** The custom colors to be defined must include "--color-" which is followed by custom name (i.e; --color-\<custom_name\>). Similarly custom font properties must include "--font-" which is followed by custom name (i.e; --font-\<font_property\>).

We define our custom utility classes in "@layer utilities" directive as;

```
@layer utilities {
  .display-1 {
    @apply text-[4rem] leading-[1.125] font-semibold font-sans tracking-normal;
  }

  .display-2 {
    @apply text-[3.5rem] leading-[1.143] font-semibold tracking-normal font-sans;
  }
}
```

To apply tailwindcss utility classes, we first must write "@apply" followed by class name.

We define our custom CSS properties for tags like "\<h1\>", "\<p\>" etc. in "@layer base" directive as;

```
@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

**Note:** Tailwind processes "@layer base" first followed by "@layer components" and at last "@layer utilities".
