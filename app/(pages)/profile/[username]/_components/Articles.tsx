"use client";

import useSWR, { Fetcher } from "swr";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/app/lib/providers/AuthProvider";
import { ArticlesResponse } from "@/app/lib/definitions";
import { ArticlePreviews, FeedTabs, Pagination } from "@/app/ui/components";

const articlesFetcher: Fetcher<ArticlesResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

export default function Articles({ feed, page = 1 }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { user } = useAuth();

  const { data, isLoading } = useSWR(
    `/api/articles/${feed === "feed" ? "author" : "favorited"}/${user?.username}`,
    articlesFetcher,
  );

  const articleData = data || { articles: [], articlesCount: 0 };

  const tabs = [];
  tabs.push({ id: "feed", name: "My Articles", active: feed === "feed" });
  tabs.push({
    id: "favorited",
    name: "Favorited Article",
    active: feed === "favorited",
  });

  const totalPage = Math.ceil(articleData.articlesCount / 20);

  function handleChnageTab(tab: string) {
    const params = new URLSearchParams(searchParams);
    params.set("feed", tab);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <FeedTabs
        cssStyle="article-toggle"
        tabs={tabs}
        onChnageTab={handleChnageTab}
      />
      {isLoading ? <div>Loading...</div> : <ArticlePreviews {...articleData} />}
      <Pagination totalPage={totalPage} page={page} />
    </>
  );
}

interface Props {
  feed?: string;
  tag?: string;
  page?: number;
}
