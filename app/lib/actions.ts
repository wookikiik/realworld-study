'use server';

import { signIn, signOut } from '@/auth';
import { SignInForm } from '@/app/lib/definitions';
import { AuthError } from 'next-auth';

export const login = async (formData: SignInForm): Promise<string | void> => {
  try {
    // Auth - signIn 호출
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
};

export const logout = async ({ redirectTo = '/' }: { redirectTo?: string }) => {
  // Auth - signOut 호출
  await signOut({
    redirect: true,
    redirectTo: redirectTo,
  });
};
