'use client';

import { Comment } from '@/app/lib/definitions';
import { useAuth } from '@/app/lib/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface CommentsProps {
  slug: string;
  shouldFetch: boolean;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
}
export const CommentList = ({
  slug,
  shouldFetch,
  setShouldFetch,
}: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const loadComments = async () => {
      const { comments } = await fetch(`/api/comment/${slug}`, {
        method: 'GET',
      }).then((res) => res.json());

      setComments(comments);
    };

    if (!shouldFetch) {
      loadComments();
      setShouldFetch(false);
    }

    return () => {
      setShouldFetch(false);
    };
  }, [slug, shouldFetch, setShouldFetch]);

  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          slug={slug}
          comment={comment}
          setShouldFetch={setShouldFetch}
        />
      ))}
    </>
  );
};

interface CommentItemProps {
  slug: string;
  comment: Comment;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
}
export const CommentItem = ({
  slug,
  comment,
  setShouldFetch,
}: CommentItemProps) => {
  const { user } = useAuth();

  const isCurrentUser = comment.author.username === user?.username;
  const formattedDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    // hour12: false,
  }).format(new Date(comment.createdAt));

  const handleDelete = async () => {
    await fetch(`/api/comment/${slug}/${comment.id}`, {
      method: 'DELETE',
    });

    setShouldFetch(true);
  };

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link
          href={`/profile/${comment.author.username}`}
          className="comment-author"
        >
          <Image
            src={comment.author.image || '/images/smiley-cyrus.jpg'}
            alt=""
            width={512}
            height={512}
            className="comment-author-img"
          />
        </Link>
        &nbsp;
        <Link
          href={`/profile/${comment.author.username}`}
          className="comment-author"
        >
          {comment.author.username}
        </Link>
        <span className="date-posted">{formattedDate}</span>
        {isCurrentUser && (
          <span className="mod-options" onClick={handleDelete}>
            <i className="ion-trash-a"></i>
          </span>
        )}
      </div>
    </div>
  );
};
