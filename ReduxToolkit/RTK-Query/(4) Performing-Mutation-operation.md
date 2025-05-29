To perform mutation operation, we import the "mutation" hook that we created and call that hook. The hook returns the mutation method plus "error" and "isLoading" in the form of object. We then pass the body we want to create in the "create" method and it's done
<br> The sample code is written below.

```
"use client";

import { useCreatePostMutation } from "@/redux/services/json.service";
import { useState } from "react";

export const Input = () => {
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
    })
    const [createPost, { isLoading, error }] = useCreatePostMutation();

    const handleCreatePost = async () => {
        await createPost(newPost);
    }

    if (error) {
        return <p>There was error creating post.</p>
    }

    return <>
        <div className="flex justify-center mb-2">
            <input type="text" name="title" placeholder="Title..." onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))} />
            <input type="text" name="body" placeholder="Body..." onChange={(e) => setNewPost((prev) => ({ ...prev, body: e.target.value }))} />
            <button onClick={handleCreatePost} disabled={isLoading} >Create</button>
        </div>
    </>;
}
```