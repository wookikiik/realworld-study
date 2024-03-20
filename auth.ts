import NextAuth from "next-auth";
import { SessionUser, User } from "@/app/lib/definitions";
import credentials from "next-auth/providers/credentials";
import { login } from "./app/lib/data";
import { CredentialsSchema } from "./app/lib/schema";
import { NextResponse } from "next/server";

declare module "next-auth" {
  type User = Partial<User>;
  interface Session {
    user: SessionUser;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  trustHost: true,
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      // console.log("authorized???");
      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) {
        if (nextUrl.pathname === "/login" || nextUrl.pathname === "/register") {
          const callbackUrl = nextUrl.searchParams.get("callbackUrl");
          if (callbackUrl) {
            return Response.redirect(new URL(callbackUrl, nextUrl));
          }

          return Response.redirect(new URL("/", nextUrl));
        }
        return NextResponse.next();
      }

      // TODO: 권한이 (불)필요한 페이지 정리
      if (isNeedAuthorizePage(nextUrl.pathname)) {
        return false;
      }

      return NextResponse.next();
    },
    session: async ({ session, token }) => {
      if (token && session.user) {
        // jwt 콜백함수에서 accsessToken를 설정함.
        session.user.token = token.accsessToken as string;
        session.user.name = token.username as string;
      }
      // console.log(session);
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        "token" in user && (token.accsessToken = user.token);
        "username" in user && (token.username = user.username);
      }
      // console.log(token);
      return token;
    },
  },
  providers: [
    credentials({
      authorize: async (credentials) => {
        const parsedCredentials = CredentialsSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.log(parsedCredentials.error);
          return null;
        }

        const { email, password } = parsedCredentials.data;
        const data = await login(email, password);
        console.log(data);
        if ("errors" in data) {
          // TODO: handle error
          return null;
        }

        return data.user;
      },
    }),
  ],
});

function isNeedAuthorizePage(pathname: string) {
  return ["/settings"].includes(pathname);
}
