# Real World

## Todo - Sprint 6

### Main Page

    Streaming: Suspense with skeleton
    Data fetching: useSWR with API route

### Login/Register Page

    Form Validation: React-hook-form
    Error message handling with useEffect
    Actions
      - Login: Call auth.js signIn (in server action)
      - Register: Call server action

### Setting Page

    Streaming: loading.tsx
    Data fetching: Call data layer
    Form Validation: React-hook-form, Zod schema
      - Error message handling with useEffect
      - Logout: Call auth.js signOut (in server action)
    Actions
      - Save: Call server action

### Profile Page

    Streaming: Suspense with skeleton
    Data fetching: Call data layer, useSWR with API route
    Actions
      - Follow/Favorite: Call API route

### Article Detail Page

    Streaming: -
    Data fetching: Call data layer
    Actions
      - Follow/Favorite: Manage state with useContext
      - Comment: Manage comment list state with useState

### Create/Edit Article Page

    Streaming: -
    Data fetching: Call data layer
    Form Validation: useFormState, Zod schema
      - Manage the form using useFormState, and handle form validation in the server action using the Zod schema.
    Actions
      - Publish: Call server action & Redirect
