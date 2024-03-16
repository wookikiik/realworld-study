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

  const queryString = Object.keys(articlesParam)
    .map(key => encodeURIComponent(key) + '=' +
      encodeURIComponent(articlesParam[key]))
    .join('&');

    // console.log("articlesParam", articlesParam);
    // console.log('queryString', queryString);
    // console.log("URL + 'articles' + queryString,", URL + 'articles' + queryString)

  const res = await fetch(URL + 'articles?' + queryString, {
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

export async function getYourFeed(): Promise<any> {
  const session = await auth();
  const res = await fetch(URL + 'articles/feed', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${session?.user?.token}`,
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
    feed = await getYourFeed();
  }

  // console.log(feed);
  return feed;
}

function calculateOffset(currentPage: string) {
  return (Number(currentPage) - 1) * ARTICLES_PER_PAGE;
}
