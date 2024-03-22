'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ARTICLES_PER_PAGE } from '../lib/definitions';
import { createPageURL } from '../lib/utils';

export default function Pagination({ totalArticles }: { totalArticles: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const params = new URLSearchParams(searchParams);
        
    function updateUrl(pageNumber: number) {
        return createPageURL(params, pathname, 'page', pageNumber.toString())
    }

    const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <ul className="pagination">
            {pages.map(pageNumber => (
                <li
                    className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                    key={pageNumber}
                >
                    <Link
                        className="page-link"
                        href={updateUrl(pageNumber)}
                        >
                        {pageNumber}
                    </Link>
                </li>
            ))}

        </ul>

    )
}