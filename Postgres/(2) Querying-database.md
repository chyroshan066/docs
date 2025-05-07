For performing any query operations in database, we define/write our query in "repository.ts" file inside "repositories" folder which is adjacent to "index.ts" file. We export that operation as a function to "service.ts". To perform any query operation, we use "pool.query()" method. Every query is an asynchronous operation so, we make the function "async".
<br> The sample code is written below;

```
import { QueryResult } from "pg";
import { pool } from "../db/pool.ts";

export const insertData = async (name: string, id: number): Promise<QueryResult<any>> => {
    const insert_query = `INSERT INTO express_table (name, id) VALUES ($1, $2)`;
    const result = await pool.query(insert_query, [name, id]);
    return result;
}
```

The "pool.query()" method returns a "Promise" which resolves to "QueryResult\<T\>". We can pass any value directly in the query. But for passing variable instead of value we use parameter placeholders instead of template-literals to safely inject values without directly embedding them into the SQL string. In the above code, "$1" corresponds to the first variable (i.e; "name") and "$2" corresponds to the second variable (i.e; "id") and so on.

Then we import the exported function in our "service.ts" file inside "services" folder adjacent to "index.ts" file. We handle fetching/retrieving related business logic in the "service" folder. The "service.ts" file act as an intermediary between "repository.ts" file and "controller.ts". The function is then exported to "controller.ts" file.
<br> The sample code is written below;

```
import { insertData } from "../repositories/user.repository.ts";

export const createUser = async (name: string, id: number) => {
    try{
        await insertData(name, id);
        return "User created successfully";
    } catch(err) {
         throw new Error(`Failed to fetch user: ${err}`);
    }
}
```

After that, we import the exported function in "controller.ts" file inside our "controllers" folder adjacent to "index.ts" file. Then we perform user-related HTTP/HTTPS logic here and export that function to our "route.ts" file which calls the function when we visit that particular route.
<br> The sample code for "controller.ts" file is shown below;

```
import { Request, Response } from "express";
import { createUser } from "../services/user.service.ts";

export const postController = async (req: Request, res: Response): Promise<void> => {
    const { name, id } = req.body;
    try{
        const response = await createUser(name, id);
        res.status(200).send(response)
    } catch(err) {
        res.status(404).send(err);
    }
};
```

The application/json content-type sent by the client to an API endpoint can be accessed from "req.body". For that we need to parse the body of incoming requests using "express.json()" middleware.
<br> This middleware should be used in "app.ts" file where our express-server is setup.

```
app.use(express.json());
```
