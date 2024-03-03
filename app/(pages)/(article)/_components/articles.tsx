import Image from 'next/image';
import Link from 'next/link';

/**
 * 게시물 목록 컴포넌트
 * props.type 으로 처리: '' | 'my' | 'favorites' | ;g
 */
const ArticleList = () => {
  return (
    <>
      {/* TODO: loop list */}
      <ArticleItem />
      <Pagination />
    </>
  );
};

const ArticleItem = () => {
  return (
    <div className="article-preview">
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
          <Link href="/profile/eric-simons" className="author">
            Eric Simons
          </Link>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
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

const Pagination = () => {
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
