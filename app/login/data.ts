import { unstable_noStore as noStore } from 'next/cache';
import { auth } from '@/auth';
import { ARTICLES_PER_PAGE } from '../lib/definitions';
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
    body: JSON.stringify({ user: { email, password } }),
  })

  const data = await res.json()
  // console.log("login---")
  // console.log(data.user);

  return data.user;
}

type articlesParam = Record<string, any>;

export async function getGlobalFeed(articlesParam: articlesParam): Promise<any> {

  // console.log("articlesParam", articlesParam);
  // console.log('queryString', queryString);
  // console.log("URL + 'articles' + queryString,", URL + 'articles' + queryString)

  const res = await fetch(URL + 'articles?' +
    convertParamsToQueryString(articlesParam), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await res.json()
  // console.log('getArticles');
  // console.log(data)
  return data;
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

export async function getFeed(query: string, page: string): Promise<any> {
  let feed;
  if (!query) {
    feed = await getGlobalFeed({
      offset: calculateOffset(page)
    });
  } else {
    feed = await getYourFeed({
      offset: calculateOffset(page)
    });
  }

  // console.log(feed);
  return feed;
}

export async function getCurrentUser(): Promise<any> {
  console.log("getCurrentUser1");
  // const userSession = await getSessionToken();
  const res = await fetch(URL + 'user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNTMxNH0sImlhdCI6MTcxMDYwMzQzMCwiZXhwIjoxNzE1Nzg3NDMwfQ.vm1IVfj399-XS4dWe_hr3DCkQHT7zL8_x0w9h1CJiao`,
    },
  })

  const data = await res.json()  
  console.log("getCurrentUser", data);
  return data?.user;
}

function calculateOffset(currentPage: string) {
  return (Number(currentPage) - 1) * ARTICLES_PER_PAGE;
}

function convertParamsToQueryString(params: articlesParam): string {
  return Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' +
      encodeURIComponent(params[key]))
    .join('&');

}

async function getSessionToken(): Promise<any> {
  const session = await auth();
  console.log("session", session);
  return session?.user?.token
}