import { unstable_noStore as noStore } from 'next/cache';
import { auth } from '@/auth';
const URL = 'https://api.realworld.io/api/'

export async function login(
    email: string,
    password: string,
): Promise<any> {
    noStore();
    
    const res = await fetch(URL + 'users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user : {email, password} }),
      })
      
    const data = await res.json()
    console.log("login---")
    console.log(data.user);

    return data.user;
}

type articlesParam = {
    tag?: string, author?: string, favorited?: string, offset?: number}

export async function getArticles(articlesParam: articlesParam): Promise<any> {        
    const res = await fetch(URL + 'articles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },        
      })
      
    const data = await res.json()
    console.log('getArticles');
    console.log(data)
    return data.articles;
}

export async function getFeed(): Promise<any> {  
    const session = await auth();  
    const res = await fetch(URL + 'articles/feed', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Token ${session?.user?.token}`,
        },              
      })
      
    const data = await res.json()
    console.log('Authorization', `Token ${session?.user?.token}`)
    console.log('getFeed', data);
    return data?.articles;
}