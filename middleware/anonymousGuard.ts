import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import type { Middleware } from "./config";

// TODO: 익명 접근 가능 path config로 설정
const loggedOutPath = ["/login", "/register"];

export default async function middleware(
  req: NextRequest,
): Promise<NextResponse> {
  const session = await auth();
  const user = session?.user;
  const nextUrl = req.nextUrl;
  const isLoggedIn = !!user;

  if (isLoggedIn) {
    if (loggedOutPath.includes(nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
  }

  return NextResponse.next();
}
