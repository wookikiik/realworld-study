'use client';

import { Author } from '@/app/lib/definitions';
import { useAuth } from '@/app/lib/hooks/useAuth';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { useFollow } from '../../../providers/FollowProvider';

interface FollowButtonProps {
  author: Author;
  className?: string;
}
export const AuthorFollowButton = ({
  author,
  className,
}: FollowButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, authenticated } = useAuth();
  const { follow, setFollow } = useFollow();

  if (user?.username === author.username) {
    return null;
  }

  const toggleFollow = async () => {
    try {
      if (!authenticated) {
        router.push(`/login?callbackUrl=${pathname}`);
        return;
      }

      const data = await fetch(`/api/user/${author.username}/follow`, {
        method: follow ? 'DELETE' : 'POST',
      }).then((res) => res.json());

      setFollow((data.profile as Author).following);
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
      &nbsp; {follow ? 'Unfollow' : 'Follow'} {author.username}
    </button>
  );
};
