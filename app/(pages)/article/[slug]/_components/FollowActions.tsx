"use client";

import { useRouter } from "next/navigation";
import { Article, Author } from "@/app/lib/definitions";
import { useAuth } from "@/app/lib/providers/AuthProvider";

export default function FollowActions({
  article,
  author,
  onFollowAction,
  onUnfollowAction,
  onFavorite,
  onUnfavorite,
}: ActionsProps) {
  const { user } = useAuth();

  const isArticleAuthor = user?.username === author?.username;

  return (
    <>
      {isArticleAuthor ? (
        article?.slug && <ArticleEditActions slug={article?.slug} />
      ) : (
        <ArticleFollowActions
          article={article}
          author={author}
          onFollowAction={onFollowAction}
          onUnfollowAction={onUnfollowAction}
          onFavorite={onFavorite}
          onUnfavorite={onUnfavorite}
        />
      )}
    </>
  );
}

type ActionsProps = {
  article: Partial<Article>;
  author: Author;
  onFollowAction: () => void;
  onUnfollowAction: () => void;
  onFavorite: () => void;
  onUnfavorite: () => void;
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
  article,
  author,
  onFollowAction,
  onUnfollowAction,
  onFavorite,
  onUnfavorite,
}: ArticleFollowActionsProps) {
  const follow = article.author?.following ?? false;
  const favorites = article.favoritesCount || 0;
  const favorited = article.favorited || false;

  async function handleFollow(e: React.MouseEvent<HTMLButtonElement>) {
    // TODO: handle undefined author
    await fetch(`/api/follow/${author?.username ?? ""}`, {
      method: "POST",
      cache: "no-store",
    });
    onFollowAction();
  }

  async function handleUnfollow(e: React.MouseEvent<HTMLButtonElement>) {
    await fetch(`/api/follow/${author?.username ?? ""}`, {
      method: "DELETE",
      cache: "no-store",
    });
    onUnfollowAction();
  }

  async function handleFavorite(e: React.MouseEvent<HTMLButtonElement>) {
    await fetch(`/api/articles/${article.slug ?? ""}/favorite`, {
      method: "POST",
      cache: "no-store",
    });
    onFavorite();
  }

  async function handleUnfavorite(e: React.MouseEvent<HTMLButtonElement>) {
    await fetch(`/api/articles/${article.slug ?? ""}/favorite`, {
      method: "DELETE",
      cache: "no-store",
    });
    onUnfavorite();
  }

  return (
    <>
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={follow ? handleUnfollow : handleFollow}
      >
        <i className="ion-plus-round"></i>&nbsp;
        {follow ? "Unfollow" : "Follow"}&nbsp;{author?.username}
      </button>
      &nbsp;&nbsp;
      <button
        className="btn btn-sm btn-outline-primary"
        onClick={favorited ? handleUnfavorite : handleFavorite}
      >
        <i className="ion-heart"></i>&nbsp;
        {favorited ? "Unfavorite" : "Favorite"}&nbsp;Post&nbsp;
        <span className="counter">({favorites})</span>
      </button>
    </>
  );
}

interface ArticleFollowActionsProps {
  article: Partial<Article>;
  author: Author;
  onFollowAction: () => void;
  onUnfollowAction: () => void;
  onFavorite: () => void;
  onUnfavorite: () => void;
}
