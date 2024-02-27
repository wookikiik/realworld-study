import NextAuth from "next-auth";
import {User} from "@/app/lib/definitions";

declare module "next-auth" {
    interface Session {
        user: User
    }
}

export const {auth} = NextAuth({
    providers: []
})