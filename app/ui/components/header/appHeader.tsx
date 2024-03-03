'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Separate logined user
 */
export const AppHeader = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <AppNavigationForUser />
        <AppNavigationForAnonymous />
      </div>
    </nav>
  );
};

const AppNavigationForAnonymous = () => {
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

const AppNavigationForUser = () => {
  const pathname = usePathname();

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
        <Link className="nav-link" href="/profile/eric-simons">
          <Image
            src="http://i.imgur.com/Qr71crq.jpg"
            alt=""
            width={26}
            height={26}
            className="user-pic"
          />
          Eric Simons
        </Link>
      </li>
    </ul>
  );
};
