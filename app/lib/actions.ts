'use server';

import { signIn } from '@/auth';
import { SignInForm } from '@/app/lib/definitions';
import { AuthError } from 'next-auth';

export async function loginAction(
  formData: SignInForm
): Promise<string | void> {
  try {
    // Auth - signin 호출
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
