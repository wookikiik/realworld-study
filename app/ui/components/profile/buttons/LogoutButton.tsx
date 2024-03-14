'use client';

import { logout } from '@/app/lib/actions/authenticationActions';
import { useAuth } from '@/app/lib/hooks/useAuth';

const LogoutButton = ({ redirectTo }: { redirectTo?: string }) => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return null;
  }

  return (
    <form action={() => logout({ redirectTo })}>
      <button className="btn btn-outline-danger">
        Or click here to logout.
      </button>
    </form>
  );
};

export default LogoutButton;
