import Link from 'next/link';

/**
 * Click 시 메인 페이지에 탭 추가
 */
export const PopularTags = () => {
  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          <Link href="" className="tag-pill tag-default">
            programming
          </Link>
          <Link href="" className="tag-pill tag-default">
            javascript
          </Link>
          <Link href="" className="tag-pill tag-default">
            emberjs
          </Link>
          <Link href="" className="tag-pill tag-default">
            angularjs
          </Link>
          <Link href="" className="tag-pill tag-default">
            react
          </Link>
          <Link href="" className="tag-pill tag-default">
            mean
          </Link>
          <Link href="" className="tag-pill tag-default">
            node
          </Link>
          <Link href="" className="tag-pill tag-default">
            rails
          </Link>
        </div>
      </div>
    </div>
  );
};
