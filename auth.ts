import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { SessionUser,  UserAuthInfo } from './app/lib/definitions';
import type { NextAuthConfig } from 'next-auth';
import { login } from './app/login/data';
import { NextResponse } from "next/server";

// -> provider password 체크 예제
// 암호화 비번 체크 시 사용 node api 
// 브라우저에서 읽을 수 x
// 라이브러리 import -> 브라우저에서 읽을 때 에러
// provider 사용하면 action 등에 따로 두군데
// config는 전체 로직
// 서버에서 사용하는 애는 따로 감쌈
// 분리 / 

declare module "next-auth" {
    type User = Partial<User>;
    interface Session {
      user: SessionUser;
    }
  }

async function getUser(email: string, password: string): Promise<UserAuthInfo | undefined> {
    try {
        const user = await login(email, password);
        console.log('getUser---');
        console.log({user, name: user.username});
        const editUser = {...user, name: user.username}
        return editUser;
    } catch (error) {        
        throw new Error('Failed to fetch user.');
    }
}


export const { auth, signIn, signOut } = NextAuth({
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
            session.user.email = token.email as string
            session.user.name = token.name as string
            session.user.token = token.sub as string
                        
            console.log("session", session);
            return session;
        },
        jwt: async ({ token, user }) => {    
            console.log("jwt", user)            
            if (user) {
                token.email = user.email
                token.name = user.name                     
                console.log("token", token);
            }            
            return token;
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {        
                console.log('credentials',credentials);  
                const user = await getUser(credentials.email as string, credentials.password as string);                
                if (!user) return null;
                console.log("authorize", user);
                return user;
            },
        }),
    ],
});


