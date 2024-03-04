'use client';

import { createContext, useContext } from 'react';
import { Session } from 'next-auth';

/**
 * Session을 제공하는 Context
 */
const AuthContext = createContext<Session | null>(null);

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

export const useAuth = () => {
  const session = useContext(AuthContext);

  return {
    session,
    user: session?.user,
    isLoggedIn: session?.authorized,
  };
};

export default AuthProvider;
