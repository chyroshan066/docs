If we don't want to store raw data directly and want a tamper-proof string that holds claims (like user ID), then we use "jsonwebtoken"
<br> We install "jsonwebtoken" using the following command;

```
npm i jsonwebtoken
```

If you are using typescript, then to define the types of "jsonwebtoken", we should also install "@types/jsonwebtoken" as a dev dependency.

```
npm i @types/jsonwebtoken
```

Then we import "jwt" from "jsonwebtoken" in the file/module where we are want to "sign" or "verify" credentials as;

```
import jwt from "jsonwebtoken";
```

For signing the credentials to be stored, we use "jwt.sign()" method and pass two arguments: first is the data/payload and second is secret.
<br> The sample code is written below

```
await jwt.sign({ token: "example@gmail.com"}, "secret");
```

To verify the credential, we use "jwt.verify()" method and pass two arguments: first is the token and second is the secret.

```
jwt.verify(req.cookies.token, "secret");
```
