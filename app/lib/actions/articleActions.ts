import {
  favoriteArticle,
  fetchArticle,
  unfavoriteArticle,
} from '../data/article';

import { ArticleResponse } from '../definitions';

export const getAtricle = async (slug: string): Promise<ArticleResponse> => {
  return await fetchArticle(slug);
};

export const toggleFavoriteArticle = async ({
  slug,
  favorited,
}: {
  slug: string;
  favorited: boolean;
}): Promise<ArticleResponse> => {
  const TOGGLE = favorited ? unfavoriteArticle : favoriteArticle;

  return await TOGGLE(slug);
};
