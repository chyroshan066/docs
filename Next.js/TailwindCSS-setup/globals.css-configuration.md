To add tailwindcss, you need to add the tailwind inside your "globals.css" file. In version 4 of tailwindcss, there is no "tailwind.config.js" file;

```
@import "tailwindcss";
```

The latest version of "tailwindcss" doesn't require this code;

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

For using custom themes in tailwindcss in the latest version, we define it inside the "globals.css" in the following manner;

```
@theme {
  /* Font family */
  --font-ibm-plex-sans: "IBM Plex Sans", "sans-serif";
  --font-bebas-neue: var(--bebas-neue);

  /* Colors */7
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));

  --color-primary: #E7C9A5;
  --color-primary-admin: #25388C;

  /* Breakpoints */
  --breakpoints-xs: 480px;

  /* Border Radius */
  --border-radius-lg: var(--radius);
  --border-radius-md: calc(var(--radius) - 2px);

  /* Background Image */
  --background-pattern: url('/images/pattern.webp');
}
```

Also, you add "plugins" using import as;

```
@plugin "tailwindcss-animate";
```

You don't need to define "content" in version 4.
<br> For dark-mode, add the following code in your "globals.css" file;

```
@custom-variant dark (&:is(.dark *));
```

We have to write utility class in the following order;

```
@utility gradient-vertical {
  background: linear-gradient(180deg, #12141d 0%, #12151f 100%);
}

@utility gradient-gray {
  background: linear-gradient(270deg, #37363a 0%, #353637 100%);
}
```
