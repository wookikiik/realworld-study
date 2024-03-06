"use server";

import { signIn as authentication } from "@/auth";
import { SigninForm, SignupForm } from "./definitions";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { register } from "./data";

export async function signIn(
  formData: SigninForm,
): Promise<string | undefined> {
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

export async function signUp(
  formData: SignupForm,
): Promise<string[] | undefined> {
  const data = await register(formData);

  if ("errors" in data) {
    const errors: string[] = [];
    Object.entries(data.errors).map(([field, fieldErrors]) => {
      fieldErrors.forEach((error: string) =>
        errors.push(`${field} is ${error}`),
      );
    });

    return errors;
  }

  // 회원가입 후 이상 없으면 로그인 페이지로 이동
  redirect("/login");
}
