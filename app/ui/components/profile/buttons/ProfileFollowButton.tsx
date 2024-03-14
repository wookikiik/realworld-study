'use client';

import { Profile } from '@/app/lib/definitions';
import { useAuth } from '@/app/lib/hooks/useAuth';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface FollowButtonProps {
  profile: Profile;
  className?: string;
}
export const ProfileFollowButton = ({
  profile,
  className,
}: FollowButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [follow, setFollow] = useState<boolean>(profile.following);

  const { user, authenticated } = useAuth();
  if (user?.username === profile.username) {
    return null;
  }

  const toggleFollow = async () => {
    try {
      if (!authenticated) {
        router.push(`/login?callbackUrl=${pathname}`);
        return;
      }

      const data = await fetch(
        `/api/user/follow?username=${profile.username}&follow=${follow ? 'unfollow' : 'follow'}`
      ).then((res) => res.json());

      setFollow((data.profile as Profile).following);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={toggleFollow}
      className={clsx(
        'btn',
        'btn-sm',
        follow ? 'btn-secondary' : 'btn-outline-secondary',
        className
      )}
    >
      <i className="ion-plus-round"></i>
      &nbsp; {follow ? 'Unfollow' : 'Follow'} {profile.username}
    </button>
  );
};
