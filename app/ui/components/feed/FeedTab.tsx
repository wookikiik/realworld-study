'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tab } from '../../constants/tabs';

interface FeedTabProps {
  current: string;
  tabs: Tab[];
  tag?: string;
}
export const FeedTab = ({ current, tabs, tag }: FeedTabProps) => {
  const pathname = usePathname();

  return (
    <ul className="nav nav-pills outline-active">
      {tabs.map((tab, index) => {
        const tabQuery = tab.query?.tab || tab.query.feed;

        return (
          <li key={index} className="nav-item">
            <Link
              className={clsx('nav-link', current === tabQuery && 'active')}
              href={{ pathname, query: { ...tab.query } }}
            >
              {tab.display}
            </Link>
          </li>
        );
      })}
      {tag && (
        <li className="nav-item">
          <Link
            className={clsx('nav-link', 'active')}
            href={{ pathname, query: { tag } }}
          >
            {tag}
          </Link>
        </li>
      )}
    </ul>
  );
};
