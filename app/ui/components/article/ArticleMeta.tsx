import { Article } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { FollowButton } from '../profile/ProfileButtons';
import {
  ArticleDeleteButton,
  ArticleEditButton,
  ArticleFavoriteButton,
} from './ArticleButtons';

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
      <FollowButton profile={author} />
      &nbsp;
      <ArticleFavoriteButton
        slug={article.slug}
        favorited={article.favorited}
        favoritesCount={article.favoritesCount}
      />
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
