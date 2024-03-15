'use server';

import { UpdateUserForm, UpdateUserResponse } from '@/app/lib/definitions';
import { updateUser as updateUserInfo } from '../data/user';

/**
 * TODO: update session info
 */
export const updateUser = async (
  formData: UpdateUserForm
): Promise<UpdateUserResponse> => {
  return await updateUserInfo(formData);
};
