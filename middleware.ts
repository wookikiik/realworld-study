import { auth } from "@/auth";
import { NextResponse } from "next/server";


export default auth(({auth, nextUrl}) => {
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

  // // TODO: 권한이 (불)필요한 페이지 정리
  if (isNeedAuthorizePage(nextUrl.pathname)) {
    const url = new URL("/login", nextUrl);
    const callbackUrl = nextUrl.origin
    url.searchParams.append('callbackUrl', callbackUrl)
    return Response.redirect(url);
  }

  return NextResponse.next();
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

function isNeedAuthorizePage(pathname: string) {
  return ["/settings"].includes(pathname);
}

// https://medium.com/@aididalam/approach-to-multiple-middleware-and-auth-guard-in-next-js-app-routing-bbb641401477