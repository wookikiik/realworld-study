"use client";

import { useRouter } from "next/navigation";
import { Article, Profile } from "@/app/lib/definitions";
import { useAuth } from "@/app/lib/providers/AuthProvider";
import useArticleStore from "@/app/lib/store/article";

export default function Actions({ article }: ActionsProps) {
  const author = article.author;
  const { user } = useAuth();

  const isArticleAuthor = user?.username === article.author.username;

  return (
    <>
      {isArticleAuthor ? (
        <ArticleEditActions slug={article.slug} />
      ) : (
        <ArticleFollowActions
          authorName={author.username}
          favoritesCount={article.favoritesCount}
        />
      )}
    </>
  );
}

type ActionsProps = {
  article: Article;
};

function ArticleEditActions({ slug }: { slug: string }) {
  const router = useRouter();

  function handleClickEdit(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    router.push(`/editor/${slug}`);
  }

  return (
    <>
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={handleClickEdit}
      >
        <i className="ion-edit"></i> Edit Article
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-danger">
        <i className="ion-trash-a"></i> Delete Article
      </button>
    </>
  );
}

function ArticleFollowActions({
  authorName,
  favoritesCount,
}: {
  authorName: string;
  favoritesCount: number;
}) {
  const author = useArticleStore.use.article()?.author;
  const follow = author?.following ?? false;
  const followAction = useArticleStore.use.follow();
  const unfollowAction = useArticleStore.use.unfollow();

  async function handleFollow(e: React.MouseEvent<HTMLButtonElement>) {
    // TODO: handle undefined author
    await fetch(`/api/follow/${author?.username || ""}`, { method: "POST" });
    followAction();
  }

  function handleUnFollow(e: React.MouseEvent<HTMLButtonElement>) {
    //
  }

  return (
    <>
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={handleFollow}
      >
        <i className="ion-plus-round"></i>&nbsp;
        {follow ? "Unfollow" : "Follow"} {authorName}
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>&nbsp;Favorite Post&nbsp;
        <span className="counter">({favoritesCount})</span>
      </button>
    </>
  );
}
