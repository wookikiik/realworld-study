"use server";

import { signIn as authSignIn } from "@/auth";

import { SigninForm } from "./definitions";
import { AuthError } from "next-auth";

export async function signIn(formData: SigninForm) {
  try {
    await authSignIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      // TODO: handle error
    }
    throw error;
  }
}
