If you want to add new plugins like "tailwindcss", "prettier" etc. for linting then go to your "eslint.config.mjs" file and add the required new plugins separated by command (,) as;

```
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ),
];
```
