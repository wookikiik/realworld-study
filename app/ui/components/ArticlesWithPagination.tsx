"use client";

import useSWR, { Fetcher } from "swr";
import { ArticlesResponse } from "@/app/lib/definitions";
import { ArticlePreviews } from ".";

const articlesFetcher: Fetcher<ArticlesResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

// /* 다중 인자 사용 방법: */ const { data: user } = useSWR(['/api/user', token], ([url, token]) => fetchWithToken(url, token))

export default function ArticlesWithPagination({
  feed,
  tag,
  pagination,
}: Props) {
  const { data, isLoading } = useSWR(
    `/api/articles/${tag ? "tag" : "feed"}/${tag || feed}`,
    articlesFetcher,
  );

  if (isLoading) return <div>Loading...</div>;
  if (!data?.articlesCount || data.articlesCount === 0) {
    return <div>No articles are here... yet.</div>;
  }

  // const totalPages = Math.ceil(data.articlesCount / perPage);

  return <ArticlePreviews articles={data?.articles || []} />;
}

type Pagination = {
  currentPage?: number;
  perPage?: number;
};

type Props = {
  feed: string;
  tag?: string;
  pagination?: Pagination;
};
