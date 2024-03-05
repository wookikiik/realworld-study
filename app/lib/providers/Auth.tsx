import { auth } from '@/auth';
import AuthProvider from './AuthProvider';

/**
 * App Router방식에서는 SessionProvider를 사용 할 필요가 없다.
 *  - SessionProvider의 역할을 middleware에서 대신하기 때문에 (export auth)
 * 대신 auth()를 client-side에서 사용 할 수 없기 때문에
 * Context Provider로 전달하는 역할
 */
const Auth = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return <AuthProvider session={session}>{children}</AuthProvider>;
};

/**
 * Get session info for server-side
 * {@link useAuth}
 */

export const getAuth = async () => {
  const session = await auth();

  return {
    session,
    user: session?.user,
    authenticated: session?.authenticated,
  };
};

export default Auth;
