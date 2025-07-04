The custom colors, fonts etc. are defined in our "global.css"/"app.css" file where "tailwindcss" is imported. We define those colors/fonts inside "@theme" directive as;

```
@theme {
  <!-- COLORS  -->
  --color-white: #ffffff;
  --color-black: #000000;
  --color-transparent: transparent;

  <!-- FONT FAMILY -->
  --font-sans: "Public Sans";

  <!-- FONT SIZE  -->
  --font-size-display-1: calc(1.3rem + 6.7vw);
  --font-size-headline-1: calc(2rem + 2.5vw);

  <!-- FONT WEIGHT -->
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  <!-- LINE HEIGHT  -->
  --line-height-1: 1em;
  --line-height-2: 1.2em;

  <!-- LETTER SPACING -->
  --letter-spacing-1: 0.15em;
  --letter-spacing-2: 0.4em;

  <!-- SPACING -->
  --spacing-section: 70px;

  <!-- SHADOWS -->
  --shadow-1: 0px 0px 25px 0px hsla(0, 0%, 0%, 0.25);

  <!-- BORDER RADIUS -->
  --radius-24: 24px;
  --radius-circle: 50%;
}
```

**Note:** The custom colors to be defined must include "--color-" which is followed by custom name (i.e; --color-\<custom_name\>). Similarly custom font family must include "--font-" which is followed by custom name (i.e; --font-\<font_family\>). For custom font size, we must include "--font-size-" which is followed by custom name (i.e; --font-size-\<font_size\>). For custom font weight, we must include "--font-weight-" which is followed by custom name (i.e; --font-weight-\<font_weight\>). For custom line height, we must include "--line-height-" which is followed by custom name (i.e; --line-height-\<line_height\>). For custom letter spacing, we must include "--letter-spacing-" which is followed by custom name (i.e; --letter-spacing-\<letter_spacing\>). For reusable spacing tokens, we must include "--spacing-" which is followed by custom name (i.e; --spacing-\<spacing_value\>). For creating shadows, we must include "--shadow-" which is followed by custom name (i.e; --shadow-\<shadow_definition\>). For defining border radius, we must include "--radius-" which is followed by custom name (i.e; --radius-\<radius_value\>).

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

We define our custom CSS properties for tags like "\<h1\>", "\<p\>" etc. in "@layer base" directive. Also the "root" variables are placed here itself;

```
@layer base {
  :root {
    --loading-text-gradient: linear-gradient(90deg, transparent 0% 16.66%, var(--smoky-black-3) 33.33% 50%,  transparent 66.66% 75%);
    --gradient-1: linear-gradient(to top,hsla(0, 0%, 0%, 0.9),hsla(0, 0%, 0%, 0.7),transparent);
  }
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

Media queries for theme variable overrides should be written outside of any @layer directives. 
<br> Even though, the custom CSS variable isn't defined inside ":root {}" pseudo class and directly inside "@theme" directory but for responsive design and changing the values of those variables, we must write it inside ":root{}" pseudo class because we can't use "@theme" directory inside "@media" query. And also because "@theme" directoyr is like a build-time configuration tool, while ":root {}" pseudo class is like runtime variables.

```
@theme {
  --font-size-display-1: calc(1.3rem + 6.7vw);
  --font-size-headline-1: calc(2rem + 2.5vw);
  --spacing-section: 70px;
}

@media (min-width: 1200px) {
  :root {
    --font-size-display-1: 7rem;
    --spacing-section: 180px;
  }
}
```

**Note:** Tailwind processes "@layer base" first followed by "@layer components" and at last "@layer utilities".
