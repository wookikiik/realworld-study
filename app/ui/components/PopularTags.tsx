import { Tag } from "@/app/lib/definitions";

export default function PopularTags({ tags }: PopularTagsProps) {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <a key={index} href="" className="tag-pill tag-default">
          {tag}
        </a>
      ))}
    </div>
  );
}

type PopularTagsProps = {
  tags: Tag[];
};
