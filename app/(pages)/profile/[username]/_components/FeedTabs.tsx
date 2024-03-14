"use client";

import React from "react";
import { FeedTabsBuilder } from "@/app/ui/components/FeedTabs";
import { useAuth } from "@/app/lib/providers/AuthProvider";

export default function FeedTab({ feed = "feed" }: FeedTabProps) {
  const { user } = useAuth();
  const builder = new FeedTabsBuilder();
  builder //
    .addTab({
      id: "1",
      group: "author",
      value: user?.username || "",
      tabName: "My Articles",
      active: feed === "feed",
    })
    .addTab({
      id: "2",
      group: "feed",
      value: "favorited",
      tabName: "Favorited Articles",
      active: feed === "favorited",
    });

  return <div className="articles-toggle">{builder.build()}</div>;
}

type FeedTabProps = {
  feed?: string;
};
