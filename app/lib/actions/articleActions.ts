import { favoriteArticle, unfavoriteArticle } from '../data/article';

import { ArticleResponse } from '../definitions';

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
