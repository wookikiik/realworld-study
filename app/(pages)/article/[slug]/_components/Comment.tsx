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
  //

  // console.log("load component");

  const comments = useCommentsStore.use.comments();

  useEffect(() => {
    useCommentsStore.getState().init(initComments);
  }, [initComments]);

  // const [commentIds, setCommentIds] = useState<string[]>([]);
  const isArticleAuthor = user.username === article.author.username;

  function handleAddComment(comment: Comment) {
    // setCommentIds([...commentIds, commentId]);
  }

  // function handleDeleteComment(commentId: string) {
  //   setCommentIds(commentIds.filter((id) => id !== commentId));
  // }

  return (
    <>
      {!isArticleAuthor && (
        <PostComment slug={article.slug} user={user} onAdd={handleAddComment} />
      )}
      <Comments comments={comments} />
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
