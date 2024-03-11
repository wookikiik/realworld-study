"use client";

import React from "react";
import { FeedTabsBuilder } from "@/app/ui/components/FeedTabs";

export default function FeedTab({ feed = "feed" }: FeedTabProps) {
  const builder = new FeedTabsBuilder();
  builder //
    .addTab({
      name: "My Articles",
      href: "feed",
      active: feed === "feed",
    })
    .addTab({
      name: "Favorited Articles",
      href: "favorited",
      active: feed === "favorited",
    });

  return <div className="articles-toggle">{builder.build()}</div>;
}

type FeedTabProps = {
  feed?: string;
};
