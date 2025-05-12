Instead of signing out using "\<SignOutButton\>" we also have another component "\<UserButton\>" which provides option for signing out as well as managing account.

```
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
    return <UserButton />;
}
```

On clicking the "Manage Account" option, it opens up the profile section in the form of modal. If we want dedicated profile section page, then we have "\<UserProfile\>" component which should be placed inside catch-all-segments. In the "page.tsx/page.jsx" file inside catch-all-segments, import the "\<UserProfile\>" component and use it according to your requirement.
<br> **Note:** Name the catch-all-segment "[[...index]]"

```
import { UserProfile } from "@clerk/nextjs"

export default function UserProfiles() {
    return <>
        <UserProfile />
    </>
};
```

If we’re using path="/user-profile" then we must name the segment same as that of the route folder name. Otherwise, just skip the path and use [[...index]].
