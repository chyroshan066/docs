```
src/
│
├── app/                  # Next.js routing: pages, layouts, templates
│   ├── (auth)/           # For auth routes: login, signup, forgot password
│   ├── dashboard/        # Protected user dashboard
│   ├── explore/          # Public explore page
│   ├── profile/          # User profile page
│   ├── settings/         # Profile/settings page
│   ├── (modals)/         # Parallel routes: modals like edit profile, create post
│   ├── not-found.tsx     # 404 page
│   ├── loading.tsx       # Global loading spinner
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── metadata.ts       # SEO metadata
│
├── components/           # Reusable UI components
│   ├── ui/               # Button, Input, Modal, Card, etc.
│   ├── posts/            # PostCard, PostList, PostSkeleton
│   ├── profile/          # ProfileCard, ProfileHeader, etc.
│   ├── auth/             # LoginForm, RegisterForm
│   ├── layout/           # Navbar, Sidebar, Footer
│   └── common/           # Loader, ErrorBoundary, etc.
│
├── reduxToolkit/         # Redux store and slices
│   ├── store.ts          # Redux store setup
│   ├── hooks.ts          # Typed useDispatch, useSelector
│   └── slices/           # Group slices here
│       ├── authSlice.ts
│       └── modalSlice.ts
│
├── graphql/              # GraphQL folder
│   ├── apollo-client.ts  # Apollo Client setup
│   ├── mutations/        # All GraphQL mutations (e.g., createPostMutation.ts)
│   ├── queries/          # All GraphQL queries (e.g., getUserPosts.ts)
│   └── fragments/        # (optional) GraphQL reusable fragments
│
├── types/                # Global TypeScript types (for props, responses, etc.)
│   ├── index.ts          # Export all types from here
│   ├── authTypes.ts
│   └── userTypes.ts
│
├── api/                  # Axios API layer (NEW)
│   ├── axiosClient.ts    # Axios instance with interceptors
│   ├── authAPI.ts        # Auth-related requests
│   ├── postAPI.ts        # Post-related requests
│   └── index.ts          # Export all API modules
│
├── constants/            # Constants (roles, URLs, API endpoints, etc.)
│   ├── routes.ts
│   ├── roles.ts
│   └── env.ts
│
├── utils/                # Helper functions
│   ├── formatDate.ts
│   ├── uploadImage.ts
│   └── classNames.ts     # for combining CSS classes
│
├── lib/                  # External libraries, api clients (optional)
│   ├── auth.ts           # Authentication helpers
│   └── storage.ts        # For file uploads if needed
│
├── middlewares/          # (optional) Middleware for client-side validation
│   └── authMiddleware.ts
│
└── public/               # Static assets: images, icons, fonts
    ├── icons/
    ├── images/
    └── favicon.ico
```
