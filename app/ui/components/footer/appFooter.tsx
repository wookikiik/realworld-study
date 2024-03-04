'use client';

import { useAuth } from '@/app/lib/providers/AuthProvider';
import { signOut } from '@/auth';
import Link from 'next/link';

export const AppFooter = () => {
  const { isLoggedIn } = useAuth();

  const handleSignout = async () => {
    const option = {
      // redirectTo: '/',
      redirect: true,
    };
    await signOut(option);
  };

  return (
    <footer>
      <div className="container">
        <Link href="/" className="logo-font">
          conduit
        </Link>
        <span className="attribution">
          An interactive learning project from{' '}
          <Link href="https://thinkster.io">Thinkster</Link>. Code &amp; design
          licensed under MIT.
        </span>
        {isLoggedIn && (
          <button
            type="button"
            className="btn btn-outline-primary btn-sm pull-xs-right"
            onClick={handleSignout}
          >
            Test Sign out
          </button>
        )}
      </div>
    </footer>
  );
};
