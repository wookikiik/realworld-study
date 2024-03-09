import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { UserAuthInfo } from './app/lib/definitions';
import type { NextAuthConfig } from 'next-auth';
import { login } from './app/login/data';
import { NextResponse } from "next/server";


export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {            
            const isLoggedIn = !!auth?.user;
            const isOnProfile = nextUrl.pathname.startsWith('/profile');
            const isOnLogin = nextUrl.pathname.startsWith('/login');
            const isOnRegister = nextUrl.pathname.startsWith('/register');

            if (isLoggedIn) {
                if (isOnLogin || isOnRegister) {
                    return Response.redirect(new URL("/", nextUrl))
                }
                return NextResponse.next();
            }

            if (isOnProfile) {
                return Response.redirect(new URL("/login", nextUrl));
            }

            return NextResponse.next();
        },
        session: async ({ session, token }) => {                    
            session.user.name = token.name as string;
            session.user.email = token.email as string;
            
            return session;
        },
        jwt: async ({ token, user }) => {            
            if (user) {
                token.email = user.email
                token.name = user.name
            }            
            return token;
        },
    },
    providers: [], 
} satisfies NextAuthConfig;

async function getUser(email: string): Promise<UserAuthInfo | undefined> {
    try {
        const user = await login(email, '');
        return user;
    } catch (error) {        
        throw new Error('Failed to fetch user.');
    }
}


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {                
                const user = await getUser("amy@amy.com");                
                if (!user) return null;

                return user;
            },
        }),
    ],
});

