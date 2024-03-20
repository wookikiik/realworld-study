import Image from "next/image";
import { Comment } from "@/app/lib/definitions";

export default function PostComment({ slug, user, onAdd }: PostCommentProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const slug = form.slug.value;
    const comment = form.comment.value;

    await fetch(`/api/articles/${slug}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // onAdd(data.comment);
        form.reset();
      });
  }

  return (
    <form className="card comment-form">
      <div className="card-block">
        <input type="hidden" name="slug" value={slug} />
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          name="test"
          rows={3}
        ></textarea>
      </div>
      <div className="card-footer">
        <Image
          src={user.image}
          alt={user.username}
          width={32}
          height={32}
          className="comment-author-img"
        />
        <button className="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
  );
}

interface PostCommentProps {
  slug: string;
  user: {
    username: string;
    image: string;
  };
  onAdd: (comment: Comment) => void;
}
