"use client";

import { useAuth } from "@/app/lib/providers/AuthProvider";
import { FeedTabsBuilder } from "./FeedTabs";

export default function HomeFeedTab({ feed, tag }: Props) {
  const { isLogined } = useAuth();

  const builder = new FeedTabsBuilder();
  if (isLogined) {
    builder.addTab({
      name: "Your Feed",
      href: "feed",
      active: feed === "feed",
    });
  }

  builder.addTab({
    name: "Global Feed",
    href: "global",
    active: feed === "global",
  });

  if (tag && feed === "tag") {
    builder.addTab({
      name: `#${tag}`,
      href: "tag",
      active: feed === "tag",
    });
  }

  return <div className="feed-toggle">{builder.build()}</div>;
}

type Props = {
  feed: string;
  tag?: string;
};
