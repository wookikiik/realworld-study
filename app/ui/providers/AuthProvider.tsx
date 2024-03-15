'use client';

import { User } from 'next-auth';
import { createContext } from 'react';

export const AuthContext = createContext<{
  currentUser?: User;
  authenticated?: boolean;
}>({
  currentUser: undefined,
  authenticated: false,
});

/**
 * SessionContext를 제공하는 Provider
 */
const AuthProvider = ({
  currentUser,
  authenticated = false,
  children,
}: {
  currentUser?: User;
  authenticated?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <AuthContext.Provider value={{ currentUser, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
