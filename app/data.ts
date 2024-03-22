
import { UserAuthInfo } from './lib/definitions';
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

export async function getFeed(query: string, page: string, tag?: string): Promise<any> {
  let feed;
  const articlesParam = {
    offset: calculateOffset(page),
    tag: tag,
  }
  if (!query) {
    feed = await getGlobalFeed(articlesParam);
  } else {
    feed = await getYourFeed(articlesParam);
  }

  return feed;
}

export async function getGlobalFeed(articlesParam: Record<string, any>): Promise<any> {
  const urlWithParam = `articles?${convertParamsToQueryString(articlesParam)}`
  const data = await fetchData<Record<string, any>>(urlWithParam, 'GET');

  return data;
}

export async function getYourFeed(articlesParam: Record<string, any>): Promise<any> {
  const urlWithParam = `articles/feed?${convertParamsToQueryString(articlesParam)}`
  const data = await fetchWithAuth<Record<string, any>>(urlWithParam, 'GET');

  return data;
}

export async function getProfiles(name: string): Promise<any> {
  const data = await fetchData<Record<string, any>>(`profiles/${name}`, 'GET');

  return data;
}

export async function getTags(): Promise<any> {
  const data = await fetchData<{ tags: [string] }>(`tags`, 'GET');

  return data;
}

