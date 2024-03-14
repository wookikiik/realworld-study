'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * TODO: Click 시 메인 페이지에 탭 추가
 */
export const PopularTags = () => {
  const pathname = usePathname();
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const { tags: _tags } = await fetch('/api/tags') //
        .then((res) => res.json());

      setTags(_tags);
      setIsLoading(false);

      return () => setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          {isLoading ? (
            <div>
              <p>loading...</p>
            </div>
          ) : (
            <>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  className="tag-pill tag-default"
                  href={{ pathname, query: { tag } }}
                >
                  {tag}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
