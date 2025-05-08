To hash password using "argon2" for enhanced security, we first need to install "argon2" using the following command;

```
npm i argon2
```

Then we import "argon2" in the file/module where we want to encrypt or decrypt password as;

```
import argon2 from "argon2";
```

For encryption we call "argon2.hash()" function and pass our plain text password. Note that, password encryption or decryption is an async operation.

```
const hashPassword = await argon2.hash(password);
```

For password decryption, we call "argon2.verify()" method, and pass two arguments: hashedPassword and plain text password.

```
const verify = await argon2.verify(result.password, password);
```

**Note:** The first argument must be hashed password and the second argument must be plain password.
