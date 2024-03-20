'use server';
import { signIn as login } from "@/auth"
import { convertParamsToQueryString } from "../data";
import type { UserAuthInfo } from "./definitions";
import { auth } from '@/auth';
type articlesParam = Record<string, any>;
const URL = 'https://api.realworld.io/api/'

export async function signIn(formData: UserAuthInfo) {
    await login("credentials", formData);
}

export async function getYourFeed(articlesParam: articlesParam): Promise<any> {
    const userSession = await getSessionToken();
    const res = await fetch(URL + 'articles/feed?' +
        convertParamsToQueryString(articlesParam), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userSession}`,
        },
    })

    const data = await res.json()
    // console.log('Authorization', `Token ${session?.user?.token}`)
    // console.log('getFeed', data);
    return data;
}

export async function getCurrentUser(): Promise<any> {    
    const res = await fetch('http://localhost:3000/api/user/', {
      method: 'GET'
    })
    // 또는 상대 경로: const res = await fetch('/api/data')    
    const data = await res.json();    
    console.log("getCurrentUser res", data);
    if (data.data) {
      // data.data에 접근하여 사용
      console.log(data.data)
    } else {
      // 에러 처리
      console.error(data.error)
    }
  
    return data.data    
}

export async function updateUser(userParam: UserAuthInfo): Promise<any> {
    console.log("updateUser");
    const userSession = await getSessionToken();
    console.log("userSession", userSession);
    try {
      const res = await fetch('https://api.realworld.io/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${userSession}`,
        },
        body: JSON.stringify({ user: userParam }),
      })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json()
      return data;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  }

export async function follow(username: string): Promise<any> {
    const userSession = await getSessionToken();
    const url = URL + 'profiles/' + username + '/follow'
    console.log(url);
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userSession}`,
        },
    })

    const data = await res.json()
    return data.user;
}

async function getSessionToken(): Promise<any> {
    const session = await auth();
    console.log("session", session);
    return session?.user?.token
}