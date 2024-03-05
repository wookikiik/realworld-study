'use client';

import { logout } from '@/app/lib/actions';
import { useAuth } from '@/app/lib/providers/AuthProvider';

const LogoutButton = ({ redirectTo }: { redirectTo?: string }) => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return null;
  }

  return (
    <form action={() => logout({ redirectTo })}>
      <button className='btn btn-secondary'>Sign Out</button>
    </form>
  );
};

export default LogoutButton;
