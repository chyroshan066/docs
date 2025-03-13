The "postcss.config.mjs" file which is pre-built is not configured according to the latest version. So, replace your "postcss.config.mjs" file code with the code provided below to add "tailwindcss";

```
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```
