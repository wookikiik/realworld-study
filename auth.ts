import NextAuth, { AuthError, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import 'next-auth/jwt';
import credentials from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';
import { authentication } from './app/lib/data';

declare module 'next-auth' {
  interface User {
    username: string;
    token: string;
    bio?: string;
  }
  interface Session {
    user: User;
    authenticated: boolean; // TODO: 체크 조건 고민 필요
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}

export class SignError extends AuthError {
  constructor({ message = 'Something went wrong.' }: { message?: string }) {
    super();
    this.message = message;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      if (!auth?.authenticated) {
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
    session: async ({ session, token }) => {
      session.authenticated = session && !!token?.user;
      session.user = token.user as AdapterUser & User;

      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
        'token' in user && (token.accessToken = user.token);
      }

      return token;
    },
  },

  providers: [
    credentials({
      authorize: async (credentials) => {
        try {
          const { user, message } = await authentication({
            email: credentials.email as string,
            password: credentials.password as string,
          });

          if (user) {
            return user;
          }

          throw new SignError({ message });
        } catch (error) {
          if (error instanceof AuthError) {
            throw error;
          }
          throw new SignError({});
        }
      },
    }),
  ],
  logger: {},
});
