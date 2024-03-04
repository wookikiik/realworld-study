import 'next-auth/jwt';
import NextAuth, { User } from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';
import { fetchLogin } from './app/lib/data';
import { AdapterUser } from 'next-auth/adapters';

declare module 'next-auth' {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    token: string;
    bio?: string;
  }
  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {
    user: User;
    authorized: boolean; // TODO: 체크 조건 고민 필요
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    user: User;
  }
}

/**
 *
 */
export const { auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  /**
   * @see https://authjs.dev/guides/basics/callbacks
   */
  callbacks: {
    // signIn: async ({ user, account, profile, email, credentials }) => {}
    // redirect: async ({ url, baseUrl }) => {},
    /**
     * 페이지 접근을 핸들링 한다. next or redirect
     */
    authorized: async ({ auth: session, request: { nextUrl } }) => {
      const isLoggedIn = !!session?.user;

      if (!session?.authorized) {
        return NextResponse.next();
      }

      // 로그인 유저의 로그인/회원가입 페이지 접근 제한
      if (!['/login', '/register'].includes(nextUrl.pathname)) {
        return NextResponse.next();
      }
      const callbackUrl = nextUrl.searchParams.get('callbackUrl');
      if (callbackUrl) {
        return Response.redirect(new URL(callbackUrl, nextUrl));
      }

      return Response.redirect(new URL('/', nextUrl));
    },
    session: async ({ session, token, user }) => {
      session.authorized = session && !!token?.user;
      session.user = token.user as AdapterUser & User;

      return session;
    },
    /**
     * JWT가 생성되거나 업데이트 될 때 호출된다.
     * i.e signin, 클라이언트에서 세션에 접근할 때 => 토큰 정보 업데이트
     */
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
  },

  providers: [
    credentials({
      authorize: async (credentials) => {
        const user = await fetchLogin({
          email: credentials.email as string,
          password: credentials.password as string,
        });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  logger: {},
});
