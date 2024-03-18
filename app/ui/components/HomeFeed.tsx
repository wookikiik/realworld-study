"use client";

import useSWR, { Fetcher } from "swr";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/app/lib/providers/AuthProvider";
import { ArticlesResponse } from "@/app/lib/definitions";
import { ArticlePreviews, FeedTabs, Pagination } from ".";

const articlesFetcher: Fetcher<ArticlesResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

export default function HomeFeed({ feed, tag, page = 1 }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { isLogined } = useAuth();

  const { data, isLoading } = useSWR(
    `/api/articles/${feed ? "feed" : "tag"}/${feed || tag?.replace("#", "")}`,
    articlesFetcher,
  );

  const articleData = data || { articles: [], articlesCount: 0 };
  // console.log("articleData", articleData);

  const tabs = [];
  if (isLogined) {
    tabs.push({ id: "feed", name: "Your Feed", active: feed === "feed" });
  }

  tabs.push({ id: "global", name: "Global Feed", active: feed === "global" });

  if (tag) {
    tabs.push({ id: "tag", name: tag, active: true });
  }

  const totalPage = Math.ceil(articleData.articlesCount / 20);

  function handleChnageTab(tab: string) {
    const params = new URLSearchParams(searchParams);
    params.set("feed", tab);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <FeedTabs
        cssStyle="feed-toggle"
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
