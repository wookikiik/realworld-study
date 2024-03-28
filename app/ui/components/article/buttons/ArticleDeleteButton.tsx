'use client';
import { useAuth } from '@/app/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  if (user?.username !== authorName) {
    return null;
  }

  const handleClick = async () => {
    if (confirm('Delete?')) {
      await fetch(`/api/article/${slug}`, { method: 'DELETE' });
      router.back(); // TODO: 이전 페이지로 이동하기 확인
    }
  };

  return (
    <button className="btn btn-sm btn-outline-danger" onClick={handleClick}>
      <i className="ion-trash-a"></i> Delete Article
    </button>
  );
};
