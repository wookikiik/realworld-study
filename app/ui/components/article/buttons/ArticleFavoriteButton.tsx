'use client';

import { Article } from '@/app/lib/definitions';
import { useAuth } from '@/app/lib/hooks/useAuth';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { useFavorite } from '../../../providers/FavoriteProvider';

/**
 * 게시물 즐겨찾기 버튼
 */
interface ArticleFavoriteButtonProps {
  slug: string;
  isSimple?: boolean;
  className?: string;
  favorited?: boolean;
  favoritesCount?: number;
}
export const ArticleFavoriteButton = ({
  slug,
  isSimple = false,
  className,
}: ArticleFavoriteButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, authenticated } = useAuth();

  const { favorited, setFavorited, favoritesCount, setFavoritesCount } =
    useFavorite();

  const toggleFavorite = async () => {
    try {
      if (!authenticated) {
        router.push(`/login?callbackUrl=${pathname}`);
        return;
      }

      const data = await fetch(
        `/api/article/favorite?slug=${slug}&favorite=${favorited ? 'unfavorite' : 'favorite'}`
      ).then((res) => res.json());

      setFavorited((data.article as Article).favorited);
      setFavoritesCount((data.article as Article).favoritesCount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className={clsx(
        'btn',
        'btn-sm',
        favorited ? 'btn-primary' : 'btn-outline-primary',
        className
      )}
      onClick={toggleFavorite}
    >
      <i className="ion-heart"></i>&nbsp;
      {isSimple ? (
        <>{favoritesCount}</>
      ) : (
        <>
          Favorite Article <span className="counter">({favoritesCount})</span>
        </>
      )}
    </button>
  );
};
