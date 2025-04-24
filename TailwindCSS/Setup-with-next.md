If "global.css" file exists, then go inside that file, and if it doesn't exist, then create a new CSS file, you can name it ( "style.css" ) and inside that file, you need to import "tailwindcss"

```
@import "tailwindcss";
```

Now import that CSS file in your root "layout.tsx/layout.jsx" file

```
import "./style.css";
```

OR

```
import "./global.css";
```

And now you're ready to use tailwindcss styling in your next app.
