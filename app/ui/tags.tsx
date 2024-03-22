'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from "next/link";
import { createPageURL } from '../lib/utils';

export default function Tags({tags}: {tags: string[]}) {  
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  return (
    <div className="tag-list">
      {tags.map((tag: string, index: number) => (
        <Link
          key={index}
          className="tag-pill tag-default"
          href={`/?tag=${tag}`}
        >{tag}</Link>
      ))}
    </div>
  );
}
