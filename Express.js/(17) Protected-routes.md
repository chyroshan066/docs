Sometimes we don't want to give access to a particular route to the client if he/she is not authenticated. In that case, we would like to protect that route. In order to do so, we use middleware function where we validate/authenticate the user and if he/she is authenticated then only we proceed to the "controller/handler" function.
<br> The sample code of "middleware.ts" file looks-like;

```
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (token){
        jwt.verify(token, "cookie_secret", (err: Error | null, decodedToken: JwtPayload | string | undefined) => {
            if (err){
                res.redirect("/login");
            } else{
                next();
            }
        });
    } else{
        res.redirect("/login");
    }
};
```

Middleware function has one parameter more than Controller function (i.e; "next"). Paramter "next" is of type "NextFunction" which can be imported from express. At the end if the user is authenticated we must call "next()" method to pass the control to the next function in the stack.

After defining middleware function, we must pass this function in "router.get()" or "router.post()" method as an argument. Those methods can take multiple arguments:
<br> First argument must be route path
<br> The next argument should be middleware function. It is optional. We can pass any number of middleware function as we want. The sequence of control goes from left to right in the middleware function.
<br> And the last argument must be controller function.

The sample code is written below;

```
router.get("/", authMiddleware, homePage);
```
