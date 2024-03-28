
import { ArticleType, CommentsType, UserAuthInfo } from './lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';
import {
  fetchData,
  fetchWithAuth,
  calculateOffset,
  convertParamsToQueryString
} from './lib/utils';


export async function getUserData() {
  const data = await fetchWithAuth<{ user: UserAuthInfo }>('user', 'GET');
  return data?.user;
}

export async function getFeed(query: string, page: string, articlesPerPage: number, tag?: string, ): Promise<any> {
  noStore();
  let feed;
  const articlesParam = {
    offset: calculateOffset(page, articlesPerPage),
    tag: tag,
  }
  if (!query) {
    feed = await getGlobalFeed(articlesParam);
  } else {
    feed = await getYourFeed(articlesParam);
  }

  return feed;
}

export async function getArticles(params:
  { page: string, user: string, query?: string, articlesPerPage: number })
  : Promise<any> {
  let articlesParam: {
    limit: number,
    offset: number,
    favorited?: string,
    author?: string,
  } = {    
    limit: 5,
    offset: calculateOffset(params.page, params.articlesPerPage),
  }
  noStore();
  if(params.query) {
    articlesParam.favorited = params.user
  } else {
    articlesParam.author = params.user
  }

  return await getGlobalFeed(articlesParam);
}

export async function getGlobalFeed(articlesParam: Record<string, any>): Promise<any> {
  const urlWithParam = `articles?${convertParamsToQueryString(articlesParam)}`
  const data = await fetchData<Record<string, any>>(urlWithParam, 'GET');

  console.log(data);
  return data;
}

export async function getYourFeed(articlesParam: Record<string, any>): Promise<any> {
  const urlWithParam = `articles/feed?${convertParamsToQueryString(articlesParam)}`
  const data = await fetchWithAuth<Record<string, any>>(urlWithParam, 'GET');

  return data;
}

export async function getProfiles(name: string): Promise<any> {
  noStore();
  const data = await fetchData<Record<string, any>>(`profiles/${name}`, 'GET');

  return data;
}

export async function getTags(): Promise<any> {
  const data = await fetchData<{ tags: [string] }>(`tags`, 'GET');

  return data;
}

export async function getArticle(slug: string): Promise<any> {
  noStore();
  const data = await fetchData<ArticleType>(`articles/${slug}`, 'GET');

  return data;
}

export async function getComments(slug: string): Promise<any> {
  noStore();
  const data = await fetchData<CommentsType>(`articles/${slug}/comments`, 'GET');

  return data;
}

