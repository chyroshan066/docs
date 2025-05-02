Create a ".env" file in your root-directory and add it to ".gitignore". Since, you don't want to share such sensitive data with anyone.

Add necessary and important variables in your ".env" file.

Install "dotenv" package using the following comand;

```
npm i dotenv
```

Add the following scripts at the top of your "index.ts" file;

```
import dotenv from "dotenv"
dotenv.config();
```

Now you can use environment variables by "process.env.VARIABLE_NAME"

```
const PORT = process.env.PORT
```
