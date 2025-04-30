While working with various files, we need to deal with path, for that we use "path" module.
<br> We import the "path" module in ES in the following way;

```
import path from "path";
```

This imported "path" module has various methods

1. ".join()"
   <br> This method takes various files and folders and join them. Eg;

```
const filePath: string = path.join("folder", "node", "src", "index.js");
```

2. ".resolve()"
   <br> This method returns the absolute path of our file from the computer. Eg;

```
path.resolve(filePath);
```

3. ".parse()"
   <br> This method returns the path in object format which includes "basename", directory name, extension name etc. Eg;

```
path.parse(filePath);
```

4. ".extname()"
   <br> This method returns the extension of our file. Eg;

```
path.extname(filePath);
```

5. ".basename()"
   <br> This method returns the filename with the extension. Eg;

```
path.basename(filePath);
```

6. ".sep()"
   <br> This method returns the separator of the path. Eg;

```
path.sep(filePath);
```
