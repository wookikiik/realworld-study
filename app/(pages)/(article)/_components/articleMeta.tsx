import Image from 'next/image';
import { FollowButton } from '../../profile/_components/followButton';
import Link from 'next/link';

export const ArticleMeta = () => {
  return (
    <div className="article-meta">
      <Link href="/profile/eric-simons">
        <Image
          src="http://i.imgur.com/Qr71crq.jpg"
          alt=""
          width={512}
          height={512}
        />
      </Link>
      <div className="info">
        <Link href="" className="author">
          Eric Simons
        </Link>
        <span className="date">January 20th</span>
      </div>
      <FollowButton />
      &nbsp;
      <ArticleFavoriteButton />
      <ArticleEditButton />
      <ArticleDeleteButton />
    </div>
  );
};

const ArticleFavoriteButton = () => {
  return (
    <button className="btn btn-sm btn-outline-primary">
      <i className="ion-heart"></i>
      &nbsp; Favorite Article <span className="counter">(29)</span>
    </button>
  );
};

const ArticleEditButton = () => {
  return (
    <button className="btn btn-sm btn-outline-secondary">
      <i className="ion-edit"></i> Edit Article
    </button>
  );
};

const ArticleDeleteButton = () => {
  return (
    <button className="btn btn-sm btn-outline-danger">
      <i className="ion-trash-a"></i> Delete Article
    </button>
  );
};
