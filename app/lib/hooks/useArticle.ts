import { DEFAULT_PER_PAGE } from '@/app/ui/constants/pagination';
import useSWR, { Fetcher } from 'swr';
import { ArticlesResponse } from '../definitions';

const articlesFetcher: Fetcher<ArticlesResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

/**
 * 게시물 목록 조회 hook
 */
interface Params {
  tab?: string;
  feed?: string;
  tag?: string;
  page?: number;
  limit?: number;
  author?: string;
}
export const useArticles = ({
  tab,
  feed,
  tag,
  page = 1,
  limit = DEFAULT_PER_PAGE,
  author = '',
}: Params) => {
  let type = 'article';
  const queryParams = new URLSearchParams();
  if (tag) {
    queryParams.set('tag', tag);
  }
  if (feed === 'feed') {
    type = 'feed';
    queryParams.set('author', author);
  }
  if (tab) {
    queryParams.set(tab === 'favorited' ? 'favorited' : 'author', author);
  }

  const offset = (page - 1) * limit;
  queryParams.set('offset', offset.toString());
  queryParams.set('limit', limit.toString());

  const { data, isLoading, error } = useSWR(
    `/api/articles/${type}?${queryParams.toString()}`,
    articlesFetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};
