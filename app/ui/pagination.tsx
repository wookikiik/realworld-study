'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ARTICLES_PER_PAGE } from '../lib/definitions';

export default function Pagination({ totalArticles }: { totalArticles: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };
    
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
                        href={createPageURL(pageNumber)}>
                        {pageNumber}
                    </Link>
                </li>
            ))}

        </ul>

    )
}