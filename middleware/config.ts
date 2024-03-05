import { NextRequest, NextResponse } from "next/server";
import anonymousGuard from "./anonymousGuard";
import authenticationGuard from "./authenticationGuard";

export type Middleware = (reg: NextRequest) => Promise<NextResponse>;

export const middleware: Middleware[] = [
  //
  anonymousGuard,
  authenticationGuard,
];
