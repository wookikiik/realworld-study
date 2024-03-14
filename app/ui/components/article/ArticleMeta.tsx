import { Article } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleDeleteButton } from './buttons/ArticleDeleteButton';
import { ArticleEditButton } from './buttons/ArticleEditButton';
import { ArticleFavoriteButton } from './buttons/ArticleFavoriteButton';
import { AuthorFollowButton } from './buttons/AuthorFollowButton';

interface ArticleMetaProps {
  article: Article;
}

export const ArticleMeta = ({ article }: ArticleMetaProps) => {
  const author = article.author;
  const profileImage = author.image || '/images/smiley-cyrus.jpg';

  return (
    <div className="article-meta">
      <Link href={`/profile/${author.username}`}>
        <Image src={profileImage} alt="" width={512} height={512} />
      </Link>
      <div className="info">
        <Link href="" className="author">
          {author.username}
        </Link>
        <span className="date">January 20th</span>
      </div>
      <AuthorFollowButton author={author} />
      &nbsp;
      <ArticleFavoriteButton slug={article.slug} />
      <ArticleEditButton
        slug={article.slug}
        authorName={article.author.username}
      />
      <ArticleDeleteButton
        slug={article.slug}
        authorName={article.author.username}
      />
    </div>
  );
};
