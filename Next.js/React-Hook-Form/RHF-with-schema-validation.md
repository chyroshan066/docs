For validating form using schema rather than HTML validation, we first need to install "@hookform/resolvers" and "zod" using the following command;

```
npm i @hookform/resolvers zod
```

Then in our file, we need to import "zodResolver" from "@hookform/resolvers/zod" and "z" from "zod" as;

```
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
```

We then define our schema and infer the type of it as;

```
const FormDataSchema = z.object({
  name: z.string().nonempty('Name is required.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
});

type Inputs = z.infer<typeof FormDataSchema>;
````

Then while calling "useForm()" hook, we need to assign "zodResolver()" helper function and pass the schema we created to the "resolver" key.
<br> The sample code is written below;

```
const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
        name: "",
        message: "",
    },
    resolver: zodResolver(FormDataSchema),
});
```

The rest part of the code remains the same.

The whole sample code of "react-hook-form" with schema validation looks-like;

```
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const FormDataSchema = z.object({
  name: z.string().nonempty('Name is required.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
});

type Inputs = z.infer<typeof FormDataSchema>;

export const ReactHookForm = () => {
    const [data, setData] = useState<Inputs>();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            name: "",
            message: "",
        },
        resolver: zodResolver(FormDataSchema),
    });
    const processForm: SubmitHandler<Inputs> = data => {
        reset();
        setData(data);
    };

    return <>
        <section className='flex gap-6'>
            <form onSubmit={handleSubmit(processForm)} className='flex flex-1 flex-col gap-4 sm:w-1/2'>
                <input placeholder="name" className='rounded-lg' {...register("name")} />
                {errors.name?.message && (<p className='text-sm text-red-400'>{errors.name.message}</p>)}

                <input placeholder="message" className='rounded-lg' {...register("message")} />
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