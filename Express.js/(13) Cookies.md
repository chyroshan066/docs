We can set cookies in client-browser by using "res.cookie()" method which takes first argument as the key and second as the value. If we set the cookie in one route than that cookie is used/accessed in its nested route.
<br> The below sample code sets cookie with key = "name" and value = "Roshan"

```
res.cookie("name", "Roshan");
```

If we want to set multiple cookies, then we have to call this method multiple times.

```
res.cookie("name", "Roshan");
res.cookie("email", "079bct066@ioepc.edu.np");
```

If we want to read/get cookie, then we call "req.cookies". But before that we need to install, "cookie-parser" package.
<br> We can install "cookie-parser" by running the following command in the terminal;

```
npm i cookie-parser
```

If we are using typescript, then we have to install "@types/cookie-parser" as dev dependency for defining the type of "cookie-parser"
<br> The command is written below;

```
npm i --save-dev @types/cookie-parser
```

Then in our "app.ts" file inside "server" folder, we import "cookieParser" function from "cookie-parser" and call that function inside "app.use()" method;

```
import cookieParser from "cookie-parser";

app.use(cookieParser());
```

The sample code for reading cookie is written below;

```
export const readCookie = (req: Request, res: Response) => {
    console.log(req.cookies)
    return res.send("You are reading cookie");
}
```
