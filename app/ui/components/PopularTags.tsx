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
    const tag = e.currentTarget.getAttribute("href");

    const feed = searchParams.get("feed");

    if (tag) {
      params.set("tag", tag);
      feed !== "tag" && params.set("feed", "tag");
    } else {
      params.delete("feed");
      params.delete("tag");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <a
          key={index}
          href={tag}
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
