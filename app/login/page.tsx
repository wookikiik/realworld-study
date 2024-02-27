'use client';

import { useFormState, useFormStatus } from "react-dom"
import { LoginState } from "@/app/lib/definitions";
import { login } from "@/app/lib/actions";

export default function Page(){

    const [errorMessage, dispatch] = useFormState<LoginState, FormData>(login, undefined)

    return (
        <div>
            <h1>Login</h1>
            <p>This is login page</p>
            { errorMessage && <p>{errorMessage}</p> }
            <form action={dispatch}>
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <LoginButton />
            </form>
        </div>
    )
}

function LoginButton(){
    const status = useFormStatus();
    return (
        <button type="submit" aria-disabled={status.pending}>Login</button>
    )
}