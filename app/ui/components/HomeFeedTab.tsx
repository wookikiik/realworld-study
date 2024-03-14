"use client";

import { useAuth } from "@/app/lib/providers/AuthProvider";
import { FeedTabsBuilder } from "./FeedTabs";

export default function HomeFeedTab({ group, value }: Props) {
  const { isLogined } = useAuth();

  const builder = new FeedTabsBuilder();
  if (isLogined) {
    builder.addTab({
      id: "1",
      group: "feed",
      value: "feed",
      tabName: "Your Feed",
      active: group === "feed" && value === "feed",
    });
  }

  builder.addTab({
    id: "2",
    group: "feed",
    value: "global",
    tabName: "Global Feed",
    active: group === "feed" && value === "global",
  });

  if (group === "tag") {
    builder.addTab({
      id: "3",
      group: "tag",
      value,
      tabName: `#${value}`,
      active: group === "tag",
    });
  }

  return <div className="feed-toggle">{builder.build()}</div>;
}

type Props = {
  group: string;
  value: string;
};
