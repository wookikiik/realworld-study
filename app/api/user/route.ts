import { auth } from "@/auth"
import { getToken } from "next-auth/jwt"

import { NextResponse } from "next/server";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNjQ0Mn0sImlhdCI6MTcxMDkwMDczMCwiZXhwIjoxNzE2MDg0NzMwfQ.t8I9FR3kn1FVtOnbIllR2APiXVItnd220nGyES2J6QQ';
const URL = 'https://api.realworld.io/api/'

export async function GET(request: Request) {
    console.log("getCurrentUser2");

    const userSession = await getSessionToken(request);
    // const userSession = TOKEN;
    if (userSession) {
        // 인증된 요청에 대한 처리         
        const res = await fetch('https://api.realworld.io/api/user', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${userSession}`,
            },
        })

        console.log("GET res", res);        
        return NextResponse.json({ data: await res.json() })
    } else {
        // 인증되지 않은 요청에 대한 처리
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
}

async function getSessionToken(request: Request): Promise<string | null> {    
    const session = await auth()    
    const token = session?.user?.token

    console.log("getSession", session);
    console.log("getSessionToken", token);
    if (!token) {
        return null;
    }
    
    return token;
}