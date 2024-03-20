import { unstable_noStore as noStore } from 'next/cache';
import { getYourFeed } from './lib/actions';
import { ARTICLES_PER_PAGE, UserAuthInfo } from './lib/definitions';
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





function calculateOffset(currentPage: string) {
  return (Number(currentPage) - 1) * ARTICLES_PER_PAGE;
}

export function convertParamsToQueryString(params: articlesParam): string {
  return Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' +
      encodeURIComponent(params[key]))
    .join('&');

}


export async function getProfiles(name: string): Promise<any> {
  const res = await fetch(URL + 'profiles/' + name, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await res.json()
  console.log("getProfile", data);
  return data;
}
