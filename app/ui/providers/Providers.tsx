import { fetchCurrentUser } from '@/app/lib/data/user';
import { auth } from '@/auth';
import { User } from 'next-auth';
import AuthProvider from './AuthProvider';

/**
 * Root of providers
 *
 * @see https://vercel.com/guides/react-context-state-management-nextjs
 */
const Providers = async ({ children }: { children: React.ReactNode }) => {
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

  return (
    <AuthProvider
      currentUser={currentUser}
      authenticated={session?.authenticated}
    >
      {children}
    </AuthProvider>
  );
};

export default Providers;
