import { getArticles } from '@/app/lib/actions/articleActions';
import { Article } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleFavoriteButton } from './ArticleButtons';

/**
 * 게시물 목록 컴포넌트
 */
const ArticleList = async ({ query = '' }: { query?: string }) => {
  // useSwr
  const { articles, articlesCount } = await getArticles(query);

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
const ArticleItem = ({ article }: AcrticleItemProps) => {
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
        <ArticleFavoriteButton
          slug={article.slug}
          favorited={article.favorited}
          favoritesCount={article.favoritesCount}
          isSimple={true}
          className="pull-xs-right"
        />
      </div>
      <Link
        href="/article/how-to-build-webapps-that-scale"
        className="preview-link"
      >
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">realworld</li>
          <li className="tag-default tag-pill tag-outline">implementations</li>
        </ul>
      </Link>
    </div>
  );
};

interface PaginationProps {
  count: number;
}
const Pagination = ({ count }: PaginationProps) => {
  return (
    <ul className="pagination">
      <li className="page-item active">
        <Link className="page-link" href="">
          1
        </Link>
      </li>
      <li className="page-item">
        <Link className="page-link" href="">
          2
        </Link>
      </li>
    </ul>
  );
};

export { ArticleList as Articles };
