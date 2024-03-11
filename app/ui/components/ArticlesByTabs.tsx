"use client";

import useSWR, { Fetcher } from "swr";
import { ArticlesResponse } from "@/app/lib/definitions";
import { ArticlePreviews } from ".";
import { useAuth } from "@/app/lib/providers/AuthProvider";
import { FeedTabsBuilder } from "./FeedTabs";

type Props = { currentFeed: string };

const articlesFetcher: Fetcher<ArticlesResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

// /* 다중 인자 사용 방법: */ const { data: user } = useSWR(['/api/user', token], ([url, token]) => fetchWithToken(url, token))

export default function ArticlesByTabs({ currentFeed }: Props) {
  return (
    <>
      {/* <Tabs currentFeed={currentFeed} /> */}
      <ArticlesWithPagination feed={currentFeed} />
    </>
  );
}

function ArticlesWithPagination({ feed }: { feed: string }) {
  const { data, isLoading } = useSWR(
    `/api/articles/feed/${feed}`,
    articlesFetcher,
  );

  if (isLoading) return <div>Loading...</div>;
  if (data?.articlesCount === 0) return <div>No articles are here... yet.</div>;

  return <ArticlePreviews articles={data?.articles || []} />;
}
