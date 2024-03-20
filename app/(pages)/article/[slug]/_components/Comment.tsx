"use client";

import { useEffect } from "react";
import PostComment from "./PostComment";
import Comments from "./Comments";

import { Article, Comment } from "@/app/lib/definitions";
import useCommentsStore from "@/app/lib/store/comments";

export default function Comment({
  user,
  article,
  comments: initComments,
}: CommentProps) {
  const comments = useCommentsStore.use.comments();
  const onFetchComments = useCommentsStore.use.load();

  useEffect(() => {
    useCommentsStore.getState().init(initComments);
  }, [initComments]);

  const isArticleAuthor = user.username === article.author.username;

  return (
    <>
      {!isArticleAuthor && (
        <PostComment
          slug={article.slug}
          user={user}
          onReload={() => onFetchComments(article.slug)}
        />
      )}
      <Comments
        article={article}
        comments={comments}
        onReload={() => onFetchComments(article.slug)}
      />
    </>
  );
}

type CommentProps = {
  user: {
    username: string;
    image: string;
  };
  article: Article;
  comments: Comment[];
};
