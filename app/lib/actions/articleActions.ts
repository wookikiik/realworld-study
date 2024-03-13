import {
  favoriteArticle as favorite,
  getArticle as getArticleBySlug,
  getArticles as getArticleList,
  unfavoriteArticle as unfavorite,
} from '../data';
import { ArticleResponse, ArticlesResponse } from '../definitions';

export const getAtricle = async (slug: string): Promise<ArticleResponse> => {
  return await getArticleBySlug(slug);
};

export const getArticles = async (query: string): Promise<ArticlesResponse> => {
  return await getArticleList(query);
};

export const toggleFavoriteActicle = async ({
  slug,
  favorited,
}: {
  slug: string;
  favorited: boolean;
}) => {
  const { article: toggledArticle } = favorited
    ? await unfavorite(slug)
    : await favorite(slug);
  return toggledArticle;
};
