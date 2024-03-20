import { Author, Comment, User, Article } from "@/app/lib/definitions";
import { useAuth } from "@/app/lib/providers/AuthProvider";
import Articles from "@/app/ui/components/Articles";
import Image from "next/image";

export default function Comments({
  article,
  comments,
  onReload,
}: CommentsProps) {
  const { user } = useAuth();
  return (
    <>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          user={user}
          comment={comment}
          article={article}
          onReload={onReload}
        />
      ))}
    </>
  );
}

function Comment({
  user,
  comment,
  article,
  onReload,
}: {
  user: User | undefined;
  comment: Comment;
  onReload: () => void;
  article: Article;
}) {
  const commentAuthor = comment.author;
  const isArticleAuthor = user?.username === commentAuthor.username;

  async function handleDeleteComment() {
    await fetch(`/api/articles/${article.slug}/comments`, {
      method: "DELETE",
      body: JSON.stringify({ id: comment.id }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
    onReload();
  }

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <a href="/profile/author" className="comment-author">
          <Image
            src={commentAuthor.image}
            alt={commentAuthor.username}
            width={20}
            height={20}
            className="comment-author-img"
          />
        </a>
        &nbsp;
        <a href="/profile/jacob-schmidt" className="comment-author">
          {comment.author.username}
        </a>
        <span className="date-posted">Dec 29th</span>
        <span className="mod-options">
          {isArticleAuthor && (
            <i className="ion-trash-a" onClick={handleDeleteComment}></i>
          )}
        </span>
      </div>
    </div>
  );
}

type CommentsProps = {
  article: Article;
  comments: Comment[];
  onReload: () => void;
};
