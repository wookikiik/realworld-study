"use client";
import useSWR, { Fetcher } from "swr";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ArticlesResponse } from "@/app/lib/definitions";
import { ArticlePreviews } from ".";

type Props = { currentFeed: string };

const articlesFetcher: Fetcher<ArticlesResponse, string> = (url) =>
  fetch(url).then((res) => res.json());

// /* 다중 인자 사용 방법: */ const { data: user } = useSWR(['/api/user', token], ([url, token]) => fetchWithToken(url, token))

export default function ArticlesByTabs({ currentFeed }: Props) {
  return (
    <>
      <Tabs currentFeed={currentFeed} />
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

function Tabs({ currentFeed }: { currentFeed: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleTabChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const feed = e.currentTarget.getAttribute("href");
    const params = new URLSearchParams(searchParams);
    feed ? params.set("feed", feed) : params.delete("feed");
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <Tab
          name="Your Feed"
          feed="feed"
          active={currentFeed === "feed"}
          onClick={handleTabChange}
        />
        <Tab
          name="Global Feed"
          feed="global"
          active={currentFeed === "global"}
          onClick={handleTabChange}
        />
      </ul>
    </div>
  );
}

function Tab({
  name,
  feed,
  active,
  onClick,
}: {
  name: string;
  feed: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${active ? "active" : ""}`}
        href={feed}
        onClick={onClick}
      >
        {name}
      </a>
    </li>
  );
}
