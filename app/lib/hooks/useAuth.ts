import { auth } from '@/auth';

/**
 * Session info hook for server-side
 * @link AuthProvider.tsx >useAuth
 * 
 * TODO: server-side에서는 react hook을 못쓰기 때문에 네이밍 변경 필요
 */
export const useAuth = async () => {
  const session = await auth();

  return {
    session,
    user: session?.user,
    authenticated: session?.authenticated,
  };
};
