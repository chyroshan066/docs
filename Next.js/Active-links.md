For creating active links, you first need to import "usePathname" from next as;

```
import { usePathname } from "next/navigation"
```

Now define a variable inside your export default function as;

```
const pathname = usePathname();
```

Since, you're using react hooks, you first need to convert server component to client using "use client" directive

```
"use client";
```

Now, declare a new variable (say "isActive" ) which is boolean using the following condition inside your map function.

```
const isActive = pathname === link.href || ( pathname.startsWith(link.href) && link.href !== "/" );
```

Now, you can change the class of the tag based on the value of the "isActive" varibale in your "Link" tag as;

```
<Link
    href={link.href}
    key={link.name}
    className={isActive? "active" : "inActive"}
    >
    <li>{link.name}</li>
</Link>
```

The full code segment looks like;

```
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Header(){
    const navLinks = [
        {name: "Home", href: "/"},
        {name: "About", href: "/about"},
        {name: "Products", href: "/products"},
        {name: "Blogs", href: "/blog"},
        {name: "Customers", href: "/customers"},
        {name: "Revenue", href: "/revenue"},
        {name: "Register", href: "/register"},
        {name: "Logout", href: "/logout"},
        {name: "Profile", href: "/profile"},
    ];
    const pathname = usePathname();

    return <>
        <header style={{
            display:"flex",
            height: "80px",
            backgroundColor: "#2d545e",
            color: "#fff",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 80px"
            }}>
            <div className="left">
                <h2>Next</h2>
            </div>
            <div className="right">
                <ul style={{
                display: "flex",
                flexDirection: "row",
                listStyle: "none",

            }}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href || ( pathname.startsWith(link.href) && link.href !== "/");

                    return (
                    <Link
                        href={link.href}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                        key={link.name}
                        className={isActive? "active" : "inActive"}
                        >
                        <li style={{ padding: "0 10px", }}>{link.name}</li>
                    </Link>
                )})}
                </ul>
            </div>
        </header>
    </>
}
```
