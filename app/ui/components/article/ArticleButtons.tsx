'use client';

import { toggleFavoriteActicle } from '@/app/lib/actions/articleActions';
import { useAuth } from '@/app/lib/hooks/useAuth';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * 게시물 즐겨찾기 버튼
 */
interface ArticleFavoriteButton {
  slug: string;
  favorited: boolean;
  favoritesCount: number;
  isSimple?: boolean;
  className?: string;
}
export const ArticleFavoriteButton = ({
  slug,
  favorited: originFavorited,
  favoritesCount: originFavoritesCount,
  isSimple = false,
  className,
}: ArticleFavoriteButton) => {
  const [article, setArticle] = useState<{
    slug: string;
    favorited: boolean;
    favoritesCount: number;
  }>({
    slug,
    favorited: originFavorited,
    favoritesCount: originFavoritesCount,
  });

  const handleClick = async () => {
    const _article = await toggleFavoriteActicle({
      slug,
      favorited: article.favorited,
    });

    setArticle({
      slug,
      favorited: _article.favorited,
      favoritesCount: _article.favoritesCount,
    });
  };

  return (
    <button
      className={clsx(
        'btn',
        'btn-sm',
        article.favorited ? 'btn-primary' : 'btn-outline-primary',
        className
      )}
      onClick={handleClick}
    >
      <i className="ion-heart"></i>&nbsp;
      {isSimple ? (
        <>{article.favoritesCount}</>
      ) : (
        <>
          Favorite Article{' '}
          <span className="counter">({article.favoritesCount})</span>
        </>
      )}
    </button>
  );
};

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
