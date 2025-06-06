To secure our express.js app, we use "helmet" library. First we need to install "helmet" using the following command;

```
npm i helmet
```

Then in our "app.ts" file inside "server" folder, we import "helmet" and use this middleware.
<br> The sample code is written below;

```
import helmet from "helmet";

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
```

The "Cross-Origin-Resource-Policy" helps us control who can load resources from our server — especially across different origins (i.e., domains).