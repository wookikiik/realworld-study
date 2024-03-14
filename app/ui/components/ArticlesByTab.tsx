"use client";

import { FeedId } from "@/app/lib/definitions";

import useSWR, { Fetcher } from "swr";
import { ArticlesResponse } from "@/app/lib/definitions";

const articlesFetcher: Fetcher<ArticlesResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

// /* 다중 인자 사용 방법: */ const { data: user } = useSWR(['/api/user', token], ([url, token]) => fetchWithToken(url, token))

export default function ArticlesByTab({ TabRenderer }: Props) {
  return <>{TabRenderer}</>;
}

interface Props {
  TabRenderer: React.ReactNode;
}
