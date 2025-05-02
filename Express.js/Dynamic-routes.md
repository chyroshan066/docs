For using dynamic routes in expres.js, we add colon (:), in front of the route-name. And dynamic URL can be accessed by "req.params./<dynamic-route-name/>"
<br> This can be better explained with the code below;

```
app.get("/users/:username", (req: Request, res: Response): void => {
    res.send(`<h1>The username is ${req.params.username}</h1>`);
  });

app.get("/users/:username/articles/:article", (req: Request, res: Response): void => {
    console.log(req.params)
    res.send(`<h1>Ariticle on ${req.params.article} by ${req.params.username}</h1>`);
  });
```

In the above code, "username" and "article" are dynamic routes.
