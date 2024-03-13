'use client';

import { useContext } from 'react';
import { AuthContext } from '../../ui/providers/AuthProvider';

/**
 * Session info hook for client-side
 * {@link getAuth}
 */

export const useAuth = () => {
  const session = useContext(AuthContext);

  return {
    session,
    user: session?.user,
    authenticated: session?.authenticated,
  };
};
