'use client';
import { useAuth } from '@/app/lib/hooks/useAuth';

/**
 * 게시물 삭제 버튼
 */
interface ArticleDeleteButtonProps {
  slug: string;
  authorName: string;
}
export const ArticleDeleteButton = ({
  slug,
  authorName,
}: ArticleDeleteButtonProps) => {
  const { user } = useAuth();
  if (user?.username !== authorName) {
    return null;
  }

  const handleClick = () => {};

  return (
    <button className="btn btn-sm btn-outline-danger" onClick={handleClick}>
      <i className="ion-trash-a"></i> Delete Article
    </button>
  );
};
