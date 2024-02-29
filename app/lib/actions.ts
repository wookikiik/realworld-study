"use server";

import { signIn as authentication } from "@/auth";

import { SigninForm, SignupForm } from "./definitions";
import { AuthError } from "next-auth";

export async function signIn(formData: SigninForm): Promise<string | void> {
  try {
    await authentication("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signUp(formData: SignupForm) {
  //
}
