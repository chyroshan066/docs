For performing/creating any sign in and sign out options, first we need to import "\<SignInButton\>" and "\<SignOutButton\>" components from "@clerk/nextjs" as;

```
import { SignInButton, SignOutButton } from "@clerk/nextjs";
```

After that use those components wherever you want;
<br> The sample code is written below;

```
export const Navbar = () => {
    return (
        <div className="flex items-center gap-4">
            <SignInButton mode="modal" />
            <SignOutButton />
        </div>
    );
};
```

The (mode="modal") attribute in "\<SignInButton\>" provides modal for signing in.

For conditional rendering of the sign in and sign out options, we use "\<SignedOut\>" and "\<SignedIn\>" component to wrap.

```
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export const Navbar = () => {
    <SignedOut>
        <SignInButton mode="modal" />
    </SignedOut>
    <SignedIn>
        <Link href="/user-profile">Profile</Link>
        <SignOutButton />
    </SignedIn>
}
```

The component wrapped with "\<SignedOut\>" component renders when the user is signed out and the component wrapped with "\<SignedIn\>" component is rendered when the user is signed in.
