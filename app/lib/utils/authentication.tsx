import { auth } from '@/auth';

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
