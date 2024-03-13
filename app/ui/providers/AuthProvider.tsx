'use client';

import { Session } from 'next-auth';
import { createContext } from 'react';

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

export default AuthProvider;
