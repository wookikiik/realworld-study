'use client';

import { Article } from '@/app/lib/definitions';
import { useArticles } from '@/app/lib/hooks/useArticle';
import Image from 'next/image';
import Link from 'next/link';
import { ArticlesSkeleton } from '../../skeletons/article/Articles';
import Pagination from '../common/Pagination';
import { ArticleFavoriteButtonWithoutContext } from './buttons/ArticleFavoriteButton';

/**
 * 게시물 목록 컴포넌트
 */
interface ArticleListProps {
  query: {
    tab?: string;
    feed?: string;
    tag?: string;
  };
  page?: string;
  author?: string;
}
const ArticleList = ({ query, page, author }: ArticleListProps) => {
  const { data, isLoading } = useArticles({
    ...query,
    page: Number(page),
    author,
  });

  const articles = data?.articles || [];
  const articlesCount = data?.articlesCount || 0;

  if (isLoading) {
    return <ArticlesSkeleton />;
  }

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <>
      {articles.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
      <Pagination count={articlesCount} />
    </>
  );
};

interface AcrticleItemProps {
  article: Article;
}
export const ArticleItem = ({ article }: AcrticleItemProps) => {
  const { author } = article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link href={`/profile/${author.username}`}>
          <Image
            src={author.image || '/images/smiley-cyrus.jpg'}
            alt=""
            width={512}
            height={512}
          />
        </Link>
        <div className="info">
          <Link href={`/profile/${author.username}`} className="author">
            {author.username}
          </Link>
          <span className="date">{article.createdAt}</span>
        </div>
        <ArticleFavoriteButtonWithoutContext
          slug={article.slug}
          favorited={article.favorited}
          favoritesCount={article.favoritesCount}
          isSimple={true}
          className="pull-xs-right"
        />
      </div>
      <Link href={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export { ArticleList as Articles };
