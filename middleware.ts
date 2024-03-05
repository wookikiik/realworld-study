// https://medium.com/@aididalam/approach-to-multiple-middleware-and-auth-guard-in-next-js-app-routing-bbb641401477

import { NextRequest, NextResponse } from "next/server";
import { middleware as activatedMiddleware } from "@/middleware/config";

export default async function middleware(
  req: NextRequest,
): Promise<NextResponse> {
  for (const middleware of activatedMiddleware) {
    const response = await middleware(req);
    if (!response.ok) {
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
