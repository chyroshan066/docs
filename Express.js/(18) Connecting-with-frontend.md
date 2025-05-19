To connect your backend with the frontend, you first need to install "cors" using the following command;

```
npm i cors
```

If you are using typescript, you will also need to install "@types/cors" as dev dependency;

```
npm i @types/cors -D
```

Then in your "app.ts/app.js" file, import "cors" helper function from "cors" and call that helper function inside "app.use()" method.
<br> The sample code is written below;

```
import cors from "cors";

app.use(cors());
```

Now fetch the API in your client side, and you will get the result.