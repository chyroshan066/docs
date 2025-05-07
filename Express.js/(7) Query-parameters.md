Query parameters in the URL begins with question mark (?) and are separated by (&). We can add multiple query parameters by separating them with (&). Query parameters doesn't change the route and must be written at the end of URL. Query parameters from the URL can be accessed by "req.query". "req.query" returns an object whose key-value pair is exactly the same as the query passed.

For eg: If the URL in the search bar is

```
http://localhost:7000/products?user=roshan&id=66
```

Then the query can be accessed in our code as;

```
app.get("/products", (req: Request, res: Response): void => {
  console.log(req.query);
  res.send(`<h1>Produc page ${req.query.user} and ${req.query.id}</h1>`);
});
```
