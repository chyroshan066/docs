If we want to log requests for debugging, analytics, and security auditing in Express apps, then we use "morgan". First we need to install "morgan" using the following command;

```
npm i morgan
```

Then inside our "middleware" folder, we create new file called "logger.middleware.ts", import "morgan", setup and export this middleware.
<br> The sample code is written below;

```
import morgan from "morgan";

export const loggerMiddleware = morgan("dev");
```

We have to pass "format" to morgan() (like "common", "dev", "tiny", etc.) to determine what details about each HTTP request should be logged. 

Then in our "app.ts" file inside "server" folder, we import the exported "loggerMiddleware" and pass it in "app.use()" method as;

```
import { loggerMiddleware } from "../middlewares/logger.middleware.ts";

app.use(loggerMiddleware);
```