'use server';

import { SignForm, SignUpResponse } from '@/app/lib/definitions';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { registration } from '../data';

export const signUp = async (formData: SignForm): Promise<SignUpResponse> => {
  return await registration(formData);
};

export const login = async (formData: SignForm): Promise<string | void> => {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return error?.message;
    }
    throw error;
  }
};

/**
 * TODO: destroy session, token
 */
export const logout = async ({ redirectTo = '/' }: { redirectTo?: string }) => {
  // Auth - signOut 호출
  await signOut({
    redirect: true,
    redirectTo: redirectTo,
  });
};
