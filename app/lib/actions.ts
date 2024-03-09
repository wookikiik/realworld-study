'use server';
import { signIn as login } from "@/auth"
import type { UserAuthInfo } from "./definitions";

export async function signIn(formData: UserAuthInfo) {
    await login("credentials", formData);
}