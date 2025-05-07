"fs" module is used to perform CRUD operation on files.
<br> In ES format, it can be imported as;

```
import fs from "fs/promises";
```

Async/Await "fs" module provides various methods to perform CRUD operations;

1. **".writeFile()":**
   <br>This method is used to write content in our file if it exits. And if the file doesn't exist, then it creates the new file and write. ".writeFile()" method takes three arguments: "path", "data" and "option".

   ```
   export const writeToFile = async (): Promise<void> => {
   try {
     await fs.writeFile(pathname, "Creating file with async/await writeFile", {
     encoding: "utf8",
     });
     console.log("File created successfully");
   } catch (err) {
     console.log(err);
   }
   };
   ```

   We have to specify absolute path in "pathname" argument, data to be saved in "data" argument, "option" argument is optional. An object can be passed in this argument. The key in the object includes: "encoding" where you specify the type to be encoded, "flag" to specify whether to read/write etc. and "mode" to specify access to file based on the user.

2. **".readFile()":**
   <br>This method is used to read content from our file if it exits. And if the file doesn't exist it throws an error. ".writeFile()" method takes two arguments: "path" and "option".

   ```
   export const readFromFile = async (): Promise<void> => {
   try {
     const res: string = await fs.readFile(pathname, { encoding: "utf8" });
     console.log(res);
   } catch (err) {
     console.log(err);
   }
   };
   ```

3. **".appendFile()":**
   <br>This method is used to update content of our file if it exits. And if the file doesn't exist it creates new file and add data to it. ".appendFile()" method takes three arguments: "path", "data" and "option".

   ```
   export const appendToFile = async (): Promise<void> => {
    try {
      await fs.appendFile(
      pathname,
      "\nAppending the created file with async appendFile",
      { encoding: "utf8" }
      );
      console.log("File appended successfully");
    } catch (err) {
      console.log(err);
    }
   };
   ```

4. **".unlink()":**
   <br>This method is used to delete file if it exits. And if the file doesn't exist it throws an error. ".unlink()" method takes only one argument: i.e; "path".

   ```
   export const deleteFile = async (): Promise<void> => {
   try {
     await fs.unlink(pathname);
     console.log("File deleted successfully");
   } catch (err) {
     console.log(err);
   }
   };
   ```
