import { logout } from '@/app/lib/actions';
import { useAuth } from '@/app/lib/hooks/useAuth';

const LogoutButton = async ({ redirectTo }: { redirectTo?: string }) => {
  const { authenticated } = await useAuth();

  if (!authenticated) {
    return null;
  }

  return (
    <form
      action={async () => {
        'use server';
        await logout({ redirectTo });
      }}
    >
      <button>Sign Out</button>
    </form>
  );
};

export default LogoutButton;
