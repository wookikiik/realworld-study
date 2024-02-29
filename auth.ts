import NextAuth from "next-auth";
import { SessionUser } from "@/app/lib/definitions";
import credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

declare module "next-auth" {
  interface Session {
    user: SessionUser;
  }
}

export const { auth, signIn } = NextAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) {
        if (nextUrl.pathname === "/login" || nextUrl.pathname === "/register") {
          const callbackUrl = nextUrl.searchParams.get("callbackUrl");
          if (callbackUrl) {
            return Response.redirect(new URL(callbackUrl, nextUrl));
          }

          return Response.redirect(new URL("/", nextUrl));
        }
        // return NextResponse.next();
        return true;
      }

      // TODO: 권한이 (불)필요한 페이지 정리
      if (isNeedAuthorizePage(nextUrl.pathname)) {
        return false;
      }

      return true;
    },
    session: async ({ session, token }) => {
      return session;
    },
    jwt: async ({ token, user }) => {
      return token;
    },
  },
  providers: [
    credentials({
      authorize: async (credentials) => {
        // console.log(credentials);
        return {
          id: "1",
          email: "1234",
        };
      },
    }),
  ],
});

function isNeedAuthorizePage(pathname: string) {
  return ["/settings"].includes(pathname);
}
