'use client'
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function ToggleTab({ isLoggedIn }: {
    isLoggedIn: boolean;
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleFeed(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                {isLoggedIn ?
                    <li className="nav-item" onClick={() => handleFeed('feed')}>
                        <Link className="nav-link" href='/'>Your Feed</Link>
                    </li> : ''}
                <li className="nav-item" onClick={() => handleFeed('')}>
                    <Link className="nav-link active" href="/">Global Feed</Link>
                </li>
            </ul>
        </div>
    )
}