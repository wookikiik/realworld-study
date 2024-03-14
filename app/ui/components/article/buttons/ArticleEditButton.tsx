'use client';
import { useAuth } from '@/app/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';

/**
 * 게시물 수정 버튼
 */
interface ArticleEditButtonProps {
  slug: string;
  authorName: string;
}
export const ArticleEditButton = ({
  slug,
  authorName,
}: ArticleEditButtonProps) => {
  const router = useRouter();

  const { user } = useAuth();
  if (user?.username !== authorName) {
    return null;
  }

  const handleClick = () => {
    router.push(`/article/${slug}`);
  };

  return (
    <button className="btn btn-sm btn-outline-secondary" onClick={handleClick}>
      <i className="ion-edit"></i> Edit Article
    </button>
  );
};
