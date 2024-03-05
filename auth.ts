import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const auth = NextAuth({
    pages: {
      signIn: "/login",
    },
    callbacks: {
        authorized: () => {
            return false;
        },
        jwt: async ({token, user}) => {
            if (user) {
                token.acessToken = user.token;
            }
            return token;
        },
    },
    providers: [
        credentials({
            authorize: (credentials) => {
                const email = credentials.email;
                const password = credentials.passsword;
                const data = {
                    email: "example@naver.com",
                    name: "example name",
                    token: "token",
                };
                return data;
            }
        })
    ]
})