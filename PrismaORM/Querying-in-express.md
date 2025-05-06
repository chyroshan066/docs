For performing any query operations in prismaORM, we define/write our query in "repository.ts" file inside "repositories" folder which is adjacent to "index.ts" file. We export that operation as a function to "service.ts". To perform any query operation, we use "prisma.\<model_name\>.\<query_method\>". Every query is an asynchronous operation so, we make the function "async". But before that we need to import "prisma" object defined in our "prisma.ts" file inside "db" folder located adjacent to "index.ts" file;
<br> The sample code is written below;

```
import { User } from "@prisma/client";
import { prisma } from "../db/prisma.ts";

export const findUser = async (email: string): Promise<User | null> => {
    const result: User | null = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return result;
};
```

The return type of the query will be the same as the model name in "schema.prisma" file. And that return type can be imported from "@prisma/client" as shown above.

Then we import the exported function in our "service.ts" file inside "services" folder adjacent to "index.ts" file. We handle fetching/retrieving related business logic in the "service" folder. The "service.ts" file act as an intermediary between "repository.ts" file and "controller.ts". The function is then exported to "controller.ts" file.
<br> The sample code is written below;

```
import { User } from "@prisma/client";
import { findUser } from "../repositories/user.repository.ts";

export const findUserService = async (email: string): Promise<User | null> => {
    try{
        const users = await findUser(email);
        return users;
    } catch (err){
        throw new Error(`Error finding user: ${err}`);
    }
}
```

After that, we import the exported function in "controller.ts" file inside our "controllers" folder adjacent to "index.ts" file. Then we perform user-related HTTP/HTTPS logic here and export that function to our "route.ts" file which calls the function when we visit that particular route.
<br> The sample code for "controller.ts" file is shown below;

```
import { Request, Response } from "express";
import { createUserService, findUserService } from "../services/user.service.ts";

export const createController = async (req: Request, res: Response): Promise<Response> => {
    const { name, email, password } = req.body;
    try{
        const checkUser = await findUserService(email);
        if (checkUser){
            return res.status(400).json({ message: "Email already taken. Try another one." });
        }
        const response = await createUserService(name, email, password);
        return res.status(200).json({ data: response, message: "User created successfully." });
    } catch(err){
        throw new Error(`Error creating user: ${err}`);
    }
}
```

The application/json content-type sent by the client to an API endpoint can be accessed from "req.body". For that we need to parse the body of incoming requests using "express.json()" middleware.
<br> This middleware should be used in "app.ts" file where our express-server is setup.

```
app.use(express.json());
```
