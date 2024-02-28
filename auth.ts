import NextAuth from "next-auth";
import { SessionUser } from "@/app/lib/definitions";

declare module "next-auth" {
  interface Session {
    user: SessionUser;
  }
}

export const { auth } = NextAuth({
  providers: [],
});
