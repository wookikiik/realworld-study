'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { DEFAULT_PER_PAGE } from '../../constants/pagination';

interface PaginationProps {
  count: number;
}
const Pagination = ({ count }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const perPage = DEFAULT_PER_PAGE;
  const totalPage = count / perPage + 1;

  const currentPage = Number(searchParams.get('page') || 1);

  const getSearchQuery = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());

    return { pathname, query: params.toString() };
  };

  if (totalPage <= 1) {
    return null;
  }

  return (
    <ul className="pagination">
      {Array.from({ length: totalPage }, (_, index) => {
        const page = index + 1;
        return (
          <li
            key={index}
            className={clsx('page-item', currentPage === page && 'active')}
          >
            <Link className="page-link" href={getSearchQuery(page)}>
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
