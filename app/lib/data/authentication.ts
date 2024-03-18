import {
  SignInResponse,
  SignParams,
  SignUpResponse,
} from '@/app/lib/definitions';
import { POST } from '../utils/fetcher';

/**
 * 회원가입
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#registration
 */

export const registration = async (
  payload: SignParams
): Promise<SignUpResponse> => {
  const { user, errors } = await POST({
    url: '/users',
    payload: { user: payload },
  });

  return { user, errors };
};
/**
 * 로그인
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#registration
 */

export const authentication = async (
  payload: SignParams
): Promise<SignInResponse> => {
  const { user, message } = await POST({
    url: '/users/login',
    payload: { user: payload },
  });

  return { user, message };
};
