import {
  ResponseWithProfile,
  ResponseWithUser,
  UpdateUserForm,
  UpdateUserResponse,
} from '@/app/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { DELETE, GET, POST, PUT } from '../utils/fetcher';

/**
 * 로그인 유저 정보 조회
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-current-user
 */

export const fetchCurrentUser = async (): Promise<ResponseWithUser> => {
  noStore();

  const { user } = await GET({
    url: '/user',
  });

  return { user };
};
/**
 * 유저 정보 변경
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#update-user
 */

export const updateUser = async (
  payload: UpdateUserForm
): Promise<UpdateUserResponse> => {
  const { user } = await PUT({
    url: '/user',
    payload: { user: payload },
  });

  return { user };
};
/**
 * 프로필 조회
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-profile
 */

export const fetchProfile = async (
  username: string
): Promise<ResponseWithProfile> => {
  const { profile } = await GET({
    url: `/profiles/${username}`,
  });

  return { profile };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#follow-user
 */
export const followUser = async (
  username: string
): Promise<ResponseWithProfile> => {
  const { profile } = await POST({
    url: `/profiles/${username}/follow`,
  });

  return { profile };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#unfollow-user
 */
export const unfollowUser = async (
  username: string
): Promise<ResponseWithProfile> => {
  const { profile } = await DELETE({
    url: `/profiles/${username}/follow`,
  });

  return { profile };
};
