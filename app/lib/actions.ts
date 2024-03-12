"use server";

import { signIn as authentication } from "@/auth";
import {
  ArticleForm,
  ErrorResponse,
  ProfileForm,
  SigninForm,
  SignupForm,
} from "./definitions";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import {
  register, //
  updateProfile as callUpdateProfile,
  createArticle as callCreateArticle,
} from "./data";

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
    return flatErrors(data);
  }

  // 회원가입 후 이상 없으면 로그인 페이지로 이동
  redirect("/login");
}

export async function updateProfile(
  formData: ProfileForm,
): Promise<string[] | undefined> {
  const data = await callUpdateProfile(formData);
  if ("errors" in data) {
    return flatErrors(data);
  }

  redirect(`/profile/${formData.username}`);
}

export async function createArticle(
  formData: ArticleForm,
): Promise<string[] | undefined> {
  const data = await callCreateArticle(formData);
  if ("errors" in data) {
    return flatErrors(data);
  }

  redirect(`/article/${data.article.slug}`);
}

function flatErrors(response: ErrorResponse) {
  const errors: string[] = [];
  Object.entries(response.errors).map(([field, fieldErrors]) => {
    fieldErrors.forEach((error: string) => errors.push(`${field} is ${error}`));
  });

  return errors;
}
