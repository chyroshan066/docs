First install "react-hook-form" using the following command;

```
npm i react-hook-form
```

When using "react-hook-form", we need to ensure that our component is a client component.
<br> Then sample code for using react-hook-form is shown below.

```
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  message: string,
};

export const ReactHookForm = () => {
    const [data, setData] = useState<Inputs>();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            name: "",
            message: "",
        }
    });
    const processForm: SubmitHandler<Inputs> = data => {
        reset();
        setData(data)
    };

    return <>
        <section className='flex gap-6'>
            <form onSubmit={handleSubmit(processForm)} className='flex flex-1 flex-col gap-4 sm:w-1/2'>
                <input placeholder="name" className='rounded-lg' {...register("name", { required: "Name is required" })} />
                {errors.name?.message && (<p className='text-sm text-red-400'>{errors.name.message}</p>)}

                <input placeholder="message" className='rounded-lg' {...register("message", {
                    required: "Message is required",
                    minLength: {
                        value: 4,
                        message: "Message must have at least 4 characters",
                    }
                })} />
                {errors.message?.message && (
                    <p className='text-sm text-red-400'>{errors.message.message}</p>
                )}

                <button className='rounded-lg bg-black py-2 text-white'>Submit</button>
            </form>

            <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>

            
        </section>
    </>;
}
```

We first import "useForm" and "submitHandler" from "react-hook-form" as;

```
import { useForm, SubmitHandler } from "react-hook-form";
```

If we are using typeScript, then we define types for all the input fields. 
 
We then call "useForm()" hook to dereference and obtain various values which includes "register", "reset", "handleSubmit", "watch", "formState" etc. We can even pass objects to the hook if we want. For setting default values in various input fields, we assign an object having various input fields name and values in key-value pair as a value to "defaultValues" key.
<br> The sample code of which is written below;

```
const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
        name: "",
        message: "",
    }
});
```

We then define our submit form function whose generic return type would be "submitHandler<>"

```
const processForm: SubmitHandler<Inputs> = data => setData(data);
```

This function is passed to the "handleSubmit()" method which we obtained after dereferencing as;

```
<form onSubmit={handleSubmit(processForm)} className='flex flex-1 flex-col gap-4 sm:w-1/2'>
```

The sample code for handling registration for the input fields in "react-hook-form" looks like;

```
<input placeholder="message" className='rounded-lg' {...register("message", {
    required: "Message is required",
    minLength: {
        value: 4,
        message: "Message must have at least 4 characters",
    }
})} />
{errors.message?.message && (
    <p className='text-sm text-red-400'>{errors.message.message}</p>
)}
```