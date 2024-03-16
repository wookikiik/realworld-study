'use client'
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from "react";

export default function ToggleTab({ isLoggedIn }: {
    isLoggedIn: boolean;
}) {
    const [isGlobalActive, setIsGlobalActive] = useState(true);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleFeed(term: string) {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
            setIsGlobalActive(false);
        } else {
            params.delete('query');
            setIsGlobalActive(true);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                {isLoggedIn ?
                    <li className="nav-item" onClick={() => handleFeed('feed')}>
                        <Link className={`nav-link ${isGlobalActive ? '' : 'active'}`} href='/'>Your Feed</Link>
                    </li> : ''}
                <li className="nav-item" onClick={() => handleFeed('')}>
                    <Link className={`nav-link ${isGlobalActive ? 'active' : ''}`} href="/">Global Feed</Link>
                </li>
            </ul>
        </div>
    )
}