For handling unmatched routes, we use "app.use()" method at the end of the "index.ts" file just above the "app.listen()" method to cover all the remaining routes and send response to the client as we require. This "app.use()" method is passed with only callback function and not any route.
<br> The sample code looks like;

```
app.use((req: Request, res: Response) => {
  res.status(404).send("Page not found");
})
```
