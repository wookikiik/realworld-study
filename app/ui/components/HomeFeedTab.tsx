"use client";

import { useAuth } from "@/app/lib/providers/AuthProvider";
import Tabs from "./Tabs";
import { User } from "@/app/lib/definitions";

export default function HomeFeedTab() {
  const { user } = useAuth();
  const tabs = createTabProps(user);

  return <Tabs tabs={tabs} />;
}

function createTabProps(user: User | undefined) {
  return [
    {
      name: "Your Feed",
      src: `/#/${user?.username}`,
      permissions: () => !!user,
    },
    {
      name: "Global Feed",
      src: "/#/global",
    },
  ];
}
