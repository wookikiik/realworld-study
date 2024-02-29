import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import { login } from "./app/lib/data";

declare module "next-auth" {
  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username?: string | null;
    token?: string | null;
  }
}

export const { auth, signIn } = NextAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      // 로그인한 사용자는 인증되고, 그렇지 않은 경우 로그인 페이지로 리디렉션됩니다.
      if (!auth?.user) return false;

      // 로그인 페이지로 이동 시 이미 인증된 사용자라면 프로필 페이지로 이동됩니다.
      if (nextUrl.pathname === "/login") {
        return Response.redirect(new URL("/profile", nextUrl));
      }

      // 그 외.
      return NextResponse.next();
    },
    // 이 콜백은 세션이 확인될 때마다 호출됩니다. (예: /api/session 엔드포인트 호출, useSession 또는 getSession 사용).
    session: async ({ session, token }) => {
      token.username && (session.user.name = token.username as string);
      token.accessToken && (session.user.token = token.accessToken as string);
      console.log("[SESSION] call time", new Date().toISOString());
      return session;
    },
    // 이 콜백은 JSON 웹 토큰이 생성되거나(즉, 로그인 시) 업데이트될 때마다(즉, 클라이언트에서 세션에 액세스할 때마다) 호출됩니다.
    jwt: async ({ token, user }) => {
      if (user) {
        // user is credentials.authorize()에서 반환된 객체
        token.accessToken = user.token;
        token.username = user.username;
        console.log("[JWT] call time", new Date().toISOString());
      }
      return token;
    },
  },
  providers: [
    credentials({
      // 사용자로부터 받은 자격 증명을 처리하는 방법을 완전히 제어할 수 있습니다.
      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;
        const data = await login({ email, password });
        if ("errors" in data) {
          // TODO: error handling
          console.error(data.errors);
          return null;
        }

        return data.user;
      },
    }),
  ],
});
