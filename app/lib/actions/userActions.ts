'use server';

import { UpdateUserForm, UpdateUserResponse } from '@/app/lib/definitions';
import { fetchCurrentUser, updateUser as updateUserInfo } from '../data/user';

export const getCurrentUser = async () => {
  return await fetchCurrentUser();
};
/**
 * TODO: update session info
 */
export const updateUser = async (
  formData: UpdateUserForm
): Promise<UpdateUserResponse> => {
  return await updateUserInfo(formData);
};
