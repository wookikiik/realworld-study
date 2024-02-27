import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const {auth, signIn} = NextAuth({
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized: async ({ auth, request: {nextUrl}}) => {
            if(nextUrl.pathname === '/profile' && !auth?.user){
                return false;
            }
            return NextResponse.next();
        },
    },
    providers: [
        credentials({
            authorize: async (credentials) => {
                // Add logic here to look up the user from the credentials
                return null;
            }
        })
    ]
})