'use client';

import { Tab } from '@/app/(pages)/profile/[username]/page';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface FeedTabProps {
  tabs: Tab[];
  activeTab: string;
}
export const FeedTab = ({ tabs, activeTab }: FeedTabProps) => {
  const pathname = usePathname();

  return (
    <ul className="nav nav-pills outline-active">
      {tabs.map((tab, index) => {
        return (
          <li key={index} className="nav-item">
            <Link
              className={clsx('nav-link', tab.name === activeTab && 'active')}
              href={{ pathname, query: { tab: tab.name } }}
            >
              {tab.display}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
