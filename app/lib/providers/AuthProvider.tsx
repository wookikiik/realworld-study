'use client';

import { createContext, useContext } from 'react';
import { Session } from 'next-auth';

/**
 * Session을 제공하는 Context
 */
export const AuthContext = createContext<Session | null>(null);

/**
 * SessionContext를 제공하는 Provider
 */
const AuthProvider = ({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) => {
  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
};

/**
 * Session info hook for client-side
 * @link useAuth.ts
 */
export const useAuth = () => {
  const session = useContext(AuthContext);

  return {
    session,
    user: session?.user,
    authenticated: session?.authenticated,
  };
};

export default AuthProvider;
