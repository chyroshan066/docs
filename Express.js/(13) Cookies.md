We can set cookies in client-browser by using "res.cookie()" method which takes first argument as the key and second as the value.
<br> The below sample code sets cookie with key = "name" and value = "Roshan"

```
res.cookie("name", "Roshan");
```

If we want to set multiple cookies, then we have to call this method multiple times.

```
res.cookie("name", "Roshan");
res.cookie("email", "079bct066@ioepc.edu.np");
```

If we want to read/get cookie, then we call "req.cookies".

```
export const readCookie = (req: Request, res: Response) => {
    console.log(req.cookies)
    return res.send("You are reading cookie");
}
```
