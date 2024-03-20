import { Comment } from "@/app/lib/definitions";
import Image from "next/image";

export default function Comments({ comments }: CommentsProps) {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

function Comment({ comment }: { comment: Comment }) {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <a href="/profile/author" className="comment-author">
          <Image
            src="http://i.imgur.com/Qr71crq.jpg"
            alt=""
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
          <i className="ion-trash-a"></i>
        </span>
      </div>
    </div>
  );
}

type CommentsProps = {
  comments: Comment[];
};
