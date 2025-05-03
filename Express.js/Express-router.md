We place all our "routes" in separate file to keep our "index.ts" file neat and clean. For that we create separate "routes" folder inside our "src" directory adjacent to "index.ts" file. And inside that "routes" folder, we create "route.ts" file and handle our routes. That is possible only with the help of "Router" function from "express".
<br> We import "Router" in our "route.ts" file from "express" and instantiate an object as;

```
import { Router } from "express";

const router = Router();
```

Then we replace all our "app.get()" or "app.post()" etc. with "route.get()" and "route.post()"etc.

```
router.get("/users/:username", (req: Request, res: Response): void => {
    res.send(`<h1>The username is ${req.params.username}</h1>`);
});
```

After that we export our "router". It is better to export with other name rather than "router" because we may have multiple "route.ts" file in our project.

```
export const learnRouter = router;
```

Then we import the exported "router" in our "indext.ts" file;

```
import { learnRouter } from "./routes/learn.route.ts";
```

After that we use "app.use()" method and pass the "router" we imported.

```
app.use("/", learnRouter);
```

We call the above "app.use()" method just above the code for not-found 404 error and "app.listen()" method.

The whole sample code for "route.ts" looks like;

```
import { Router } from "express";

const router = Router();

router.get("/users/:username", (req: Request, res: Response): void => {
    res.send(`<h1>The username is ${req.params.username}</h1>`);
});

export const learnRouter = router;
```

The sample code for "index.ts" looks like;

```
import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import { PORT } from "./schemas/env.schema.ts";
import path from "path";
import { learnRouter } from "./routes/learn.route.ts";

const app = express();

const absoluteStaticPath = path.join(import.meta.dirname, "..", "public");

app.use(express.static(absoluteStaticPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", learnRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("Page not found");
})

app.listen(PORT, () => console.log(`Server listening at PORT: ${PORT}`))
```
