import { getTags } from '@/app/lib/data';
import Link from 'next/link';

/**
 * Click 시 메인 페이지에 탭 추가
 */
export const PopularTags = async () => {
  const tags = await getTags();

  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          {tags.map((tag) => (
            <Link key={tag} href="" className="tag-pill tag-default">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
