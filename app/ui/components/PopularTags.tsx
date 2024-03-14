"use client";

import { Tag } from "@/app/lib/definitions";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function PopularTags({ tags }: PopularTagsProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    const tagName = e.currentTarget.getAttribute("href");
    tagName && params.set("feed", tagName);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <a
          key={index}
          href={`#${tag}`}
          className="tag-pill tag-default"
          onClick={handleClick}
        >
          {tag}
        </a>
      ))}
    </div>
  );
}

type PopularTagsProps = {
  tags: Tag[];
};
