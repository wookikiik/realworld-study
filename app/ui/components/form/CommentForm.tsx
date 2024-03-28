'use client';

import { useAuth } from '@/app/lib/hooks/useAuth';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitButton } from './SubmitButton';

const _fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

interface CommentFormProps {
  slug: string;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
}
export const CommentForm = ({ slug, setShouldFetch }: CommentFormProps) => {
  const { user } = useAuth();
  const [comment, setComment] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { comment: _comment } = await fetch(`/api/comment/${slug}`, {
      ..._fetchOptions,
      body: JSON.stringify({ comment }),
    }).then((res) => res.json());

    setComment('');
    setShouldFetch(true);
  };

  return (
    <form className="card comment-form" onSubmit={handleSubmit}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="card-footer">
        <Image
          src={user?.image || '/images/smiley-cyrus.jpg'}
          alt=""
          className="comment-author-img"
          width={512}
          height={512}
        />
        <SubmitButton className="btn btn-sm btn-primary">
          Post Comment
        </SubmitButton>
      </div>
    </form>
  );
};
