import { auth } from '@/auth';
import { User } from 'next-auth';
import { fetchCurrentUser } from '../data/user';

/**
 * Get session info for server-side
 * {@link useAuth}
 */
export const getAuth = async () => {
  const session = await auth();
  let currentUser: User | undefined = session?.user;

  if (!!session?.authenticated) {
    try {
      currentUser = await fetchCurrentUser().then((data) => data.user);
      delete currentUser?.token;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    user: currentUser,
    authenticated: session?.authenticated,
  };
};
