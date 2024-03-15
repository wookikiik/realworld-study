"use client";

import { Article } from "@/app/lib/definitions";
import { useAuth } from "@/app/lib/providers/AuthProvider";
import { useRouter } from "next/navigation";

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
  const { isLogined } = useAuth();
  function handleToggleFollow(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (!isLogined) {
      //
    }
  }

  return (
    <>
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={handleToggleFollow}
      >
        <i className="ion-plus-round"></i>Follow {authorName}
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>Favorite Post&nbsp;
        <span className="counter">({favoritesCount})</span>
      </button>
    </>
  );
}
