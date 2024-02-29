"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Author } from "@/app/lib/definitions";
import { Tabs } from "@/app/ui/components";

export default function FeedTab({ author }: FeedTabProps) {
  const pathname = usePathname();
  const tabs = createTabProps(pathname, author.username);
  return <Tabs tabs={tabs} />;
}

function createTabProps(pathname: string, username: string) {
  return [
    {
      name: "My Articles",
      src: `/${pathname}/#/${username}`,
    },
    {
      name: "Favorited Articles",
      src: `/${pathname}/#/favorite/${username}`,
    },
  ];
}

type FeedTabProps = {
  author: Author;
};
