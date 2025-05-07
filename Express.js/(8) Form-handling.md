For form handling, we use "post" method rather than "get" method, because the information can be leaked in "get" method from the "query" in the URL header.
<br> In the frontend, the sample form looks like;

```
<form action="/contact" method="POST">
    <div>
        <label for="name">Name</label>
        <!-- <input type="text" name="user[name]" id="name"> -->
        <input type="text" name="name" id="name">
    </div>
    <div>
        <label for="message">Message</label>
        <!-- <textarea name="user[message]" id="message" placeholder="Write your name"></textarea> -->
        <textarea name="message" id="message" placeholder="Write your name"></textarea>
    </div>
    <button>Submit</button>
</form>
```

Here, in the "action" attribute, we assign the route, where we want to receive the form data on the server. In the "label" and "input" tag, the "for" attribute of the "label" points to the "id" attribute of "input" and hence their value must always be the same. And the value in the "name" attribute in the "input" field is the key where the input value is assigned.

We can get the information submitted in the form by "req.body" for "POST" method. For "POST" method, we must always use "express.urlencoded()" middleware.
<br> The sample code is written below;

```
app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req: Request, res: Response): void => {
  console.log(req.body);
  res.redirect("/");
});
```

We use "extended: true" to parse the nest input names in our form.
