'use server'

import { AuthError } from "next-auth";
import { LoginState } from "./definitions";
import { signIn } from "@/auth";

export async function login(
    prevState: LoginState,
    formData: FormData
){
    try {
        await signIn('credentials', formData)
    }
    catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case 'CredentialsSignin':
                    return 'Invalid credentials';
                default: 
                    return 'Something went wrong'
            }
        }
        throw error;
    }
}