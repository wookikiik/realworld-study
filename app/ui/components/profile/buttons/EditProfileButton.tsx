'use client';
import { Profile } from '@/app/lib/definitions';
import { useAuth } from '@/app/lib/hooks/useAuth';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface EditProfileButtonProps {
  profile: Profile;
  className?: string;
}
export const EditProfileButton = ({
  profile,
  className,
}: EditProfileButtonProps) => {
  const router = useRouter();

  const { user } = useAuth();
  if (user?.username !== profile.username) {
    return null;
  }

  const handleClick = () => {
    router.push('/settings');
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'btn',
        'btn-sm',
        'btn-secondary',
        // 'btn-outline-secondary',
        className
      )}
    >
      <i className="ion-gear-a"></i>
      &nbsp; Edit Profile Settings
    </button>
  );
};
