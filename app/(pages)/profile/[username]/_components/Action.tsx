import { Author, SessionUser, User } from "@/app/lib/definitions";
import Link from "next/link";

export default function Action({ author, user }: FeedTabProps) {
  if (author.username === user?.name) {
    return (
      <Link
        href="/settings"
        className="btn btn-sm btn-outline-secondary action-btn"
      >
        <i className="ion-gear-a"></i>
        &nbsp; Edit Profile Settings
      </Link>
    );
  }

  return (
    <form>
      <input name="username" type="hidden" value={author.username} />
      <button
        type="submit"
        className="btn btn-sm btn-outline-secondary action-btn"
      >
        <i className="ion-plus-round"></i>
        &nbsp; Follow {author.username}
      </button>
    </form>
  );
}

type FeedTabProps = {
  author: Author;
  user: SessionUser | undefined;
};
