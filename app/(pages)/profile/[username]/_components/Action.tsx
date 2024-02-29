"use client";

import { useRouter } from "next/navigation";
import { Author } from "@/app/lib/definitions";

export default function Action({ author, user }: FeedTabProps) {
  const router = useRouter();

  function handleSettingButtonClick() {
    router.push("/settings");
  }

  function handleFollowButtonClick() {
    console.log("follow");
  }

  if (user?.name === author.username) {
    return (
      <button
        className="btn btn-sm btn-outline-secondary action-btn"
        onClick={handleSettingButtonClick}
      >
        <i className="ion-gear-a"></i>
        &nbsp; Edit Profile Settings
      </button>
    );
  }

  return (
    <button
      className="btn btn-sm btn-outline-secondary action-btn"
      onClick={handleFollowButtonClick}
    >
      <i className="ion-plus-round"></i>
      &nbsp; Follow {author.username}
    </button>
  );
}

type FeedTabProps = {
  user: { name: string } | undefined;
  author: Author;
};
