'use client'
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { tabType } from "../lib/definitions";

export default function ToggleTab({ tabTypeList }: { tabTypeList: tabType[] }) {    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleTab(query?: string) {
        const params = new URLSearchParams(searchParams);        
        params.set('page', '1');
        if (query) {            
            params.set('query', query);            
        } else {
            params.delete('query');            
        }        
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <ul className="nav nav-pills outline-active">
            {
                tabTypeList.map((tab: tabType, index: number) => {
                    return (
                        <li className="nav-item" key={index} onClick={() => handleTab(tab.query)}>
                            <Link className={`nav-link ${tab.isActive ? 'active' : ''}`} href='/'>
                                {tab.tabName}
                            </Link>
                        </li>)
                })
            }            
        </ul>
    )
}