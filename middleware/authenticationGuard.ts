import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

// TODO: 회원 접근 가능 path config로 설정
const loggedInPath = ["/settings"];

export default async function middleware(
  req: NextRequest,
): Promise<NextResponse> {
  const session = await auth();
  const user = session?.user;
  const nextUrl = req.nextUrl;
  const isLoggedIn = !!user;

  if (isLoggedIn) {
    return NextResponse.next();
  }

  if (loggedInPath.includes(nextUrl.pathname)) {
    const url = new URL("/login", nextUrl);
    url.searchParams.append("callbackUrl", nextUrl.origin);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
