"fs" module is used to perform CRUD operation on files.
<br> In ES format, it can be imported as;

```
import fs from "fs";
```

Async "fs" module provides various methods to perform CRUD operations;

1. ".writeFile()"
   This method is used to write content in our file if it exits. And if the file doesn't exist it creates the new file and write. ".writeFile()" method takes four arguments: "path", "data", "option" and "callback function".

   ```
   fs.writeFile(
    pathname,
    "Creating file with async writeFile",
    { encoding: "utf8" },
    (err): void => {
      if (err) console.error(err);
      else console.log("File cretad succesfully");
    }
    );
   ```

   We have to specify absolute path in "pathname" argument, data to be saved in "data" argument, "option" argument is optional. An object can be passed in this argument. The key in the object includes: "encoding" where you specify the type to be encoded, "flag" to specify whether to read/write etc. and "mode" to specify access to file based on the user. We can specify what response it should give in our "callback function". "callback function" can have only one arguments i.e; "err".

2. ".readFile()"
   This method is used to read content from our file if it exits. And if the file doesn't exist it throws an error. ".writeFile()" method takes three arguments: "path", "option" and "callback function".

   ```
   fs.readFile(pathname, { encoding: "utf8" }, (err, data): void => {
     if (err) console.error(err);
     else console.log(data);
   });
   ```

   Here, "callback function" can have two arguments i.e; "err" and "data".

3. ".appendFile()"
   This method is used to update content of our file if it exits. And if the file doesn't exist it creates new file and add data to it. ".appendFile()" method takes four arguments: "path", "data", "option" and "callback function".

   ```
   fs.appendFile(
    pathname,
    "\nAppending the created file with async appendFile",
    { encoding: "utf8" },
    (err): void => {
      if (err) console.error(err);
      else console.log("File updated succesfully");
    }
   );
   ```

   Here, "callback function" can have only only arguments i.e; "err".

4. ".unlink()"
   This method is used to delete file if it exits. And if the file doesn't exist it throws an error. ".unlink()" method takes only two arguments: "path", and "callback function".

   ```
   fs.unlink(pathname, (err: NodeJS.ErrnoException | null): void => {
    if (err) console.error(err);
    else console.log("File has been deleted");
   });
   ```

   Here, "callback function" can have only only arguments i.e; "err".
