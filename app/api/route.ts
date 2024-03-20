// export const dynamic = 'force-dynamic' // defaults to auto
// export async function GET(request: Request) {}
import { auth } from '@/auth';
const URL = 'https://api.realworld.io/api/'

export async function GET(request: Request) {
    console.log("getCurrentUser2");
    const userSession = await getSessionToken();
    const res = await fetch(URL + 'user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userSession}`,
        },
    })

    const data = await res.json()
    console.log("getCurrentUser", data);
    return data;
  }

  async function getSessionToken(): Promise<any> {
    const session = await auth();
    console.log("session2", session);
    return session?.user?.token
}