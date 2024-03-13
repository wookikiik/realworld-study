import { auth } from '@/auth';
import AuthProvider from './AuthProvider';

/**
 * Root of providers
 *
 * @see https://vercel.com/guides/react-context-state-management-nextjs
 */
const Providers = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return <AuthProvider session={session}>{children}</AuthProvider>;
};

export default Providers;
