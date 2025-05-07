First install "zod" using the following command;

```
npm i zod
```

Then add the following scripts at the top of your "schema.ts" file;

```
import dotenv from "dotenv"
dotenv.config();
```

Then import "zod" in the module where you want to validate.
<br> It can be imported as;

```
import { z } from "zod";
```

After that create your schema for validation as;

```
const ageSchema = z.number().min(18);
```

Pass the variable which needs validation into your "safeParse()" method provided by the schema as;

```
const userAge = 19;
const { data, error, success} = ageSchema.safeParse(userAge);
```

The "safeParse" returns an object with 3 keys: "data" whose type is "z.infer\<typeof ageSchema\>", "error" whose type is "ZodError" and "success" which is of "boolean" type. All the types are defined by "zod" itself. If "data" is validated, then we receive data, "success" value would be true and "error" would be "undefined". Also if "data" is not validated, then we receive error, "success" value would be false and "data" would be "undefined".

<br> The sample code looks-like;

```
import { z } from "zod";

const ageSchema = z.number().min(18);
const userAge = 17;

const { data, error, success} = ageSchema.safeParse(userAge);

export const env = () => {
    if(success)
        console.log(data);
    else
        console.log(error?.issues);
}
```
