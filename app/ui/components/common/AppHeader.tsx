'use client';

import { useAuth } from '@/app/lib/hooks/useAuth';
import { User } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Separate logined user
 */
export const AppHeader = () => {
  const { user, authenticated } = useAuth();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        {authenticated ? (
          <UserNavigation user={user} />
        ) : (
          <AnonymousNavigation />
        )}
      </div>
    </nav>
  );
};

const AnonymousNavigation = () => {
  const pathname = usePathname();

  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link
          href="/"
          className={`${pathname === '/' ? 'active' : ''} nav-link`}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`${pathname === '/login' ? 'active' : ''} nav-link`}
          href="/login"
        >
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`${pathname === '/register' ? 'active' : ''} nav-link`}
          href="/register"
        >
          Sign up
        </Link>
      </li>
    </ul>
  );
};

interface UserNavigationProps {
  user?: User;
}

const UserNavigation = ({ user }: UserNavigationProps) => {
  const pathname = usePathname();
  const profileImage = user?.image || '/images/smiley-cyrus.jpg';

  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link
          className={`${pathname === '/' ? 'active' : ''} nav-link`}
          href="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/editor">
          {' '}
          <i className="ion-compose"></i>&nbsp;New Article{' '}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/settings">
          {' '}
          <i className="ion-gear-a"></i>&nbsp;Settings{' '}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href={`/profile/${user?.username}`}>
          <Image
            src={profileImage}
            alt=""
            width={26}
            height={26}
            className="user-pic"
          />
          {user?.username}
        </Link>
      </li>
    </ul>
  );
};
