import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

// TODO: 회원 접근 가능 path config로 설정
const loggedInPath = ["/settings", "/profile", "/editor"];

export default async function middleware(
  req: NextRequest,
): Promise<NextResponse> {
  const session = await auth();
  const user = session?.user;
  const nextUrl = req.nextUrl;
  const isLoggedIn = !!user;

  if (isLoggedIn) {
    // console.log("nextUrl.pathname", nextUrl.pathname);
    if (nextUrl.pathname === "/login" || nextUrl.pathname === "/register") {
      const callbackUrl = nextUrl.searchParams.get("callbackUrl");
      if (callbackUrl) {
        return NextResponse.redirect(new URL(callbackUrl, nextUrl));
      }

      return NextResponse.redirect(new URL("/", nextUrl));
    }

    return NextResponse.next();
  }

  if (needAuthPage(loggedInPath, nextUrl.pathname)) {
    const url = new URL("/login", nextUrl);
    // console.log(nextUrl);
    url.searchParams.append("callbackUrl", nextUrl.href);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

function needAuthPage(urls: string[], pathname: string) {
  for (const url of urls) {
    if (pathname.startsWith(url)) {
      return true;
    }
  }

  return false;
}
