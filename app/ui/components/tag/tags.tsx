import { Article } from '@/app/lib/definitions';

interface TagsProperty {
  article: Article;
}
export const Tags = ({ article }: TagsProperty) => {
  return (
    <ul className="tag-list">
      {article.tagList.map((tag) => (
        <li key={tag} className="tag-default tag-pill tag-outline">
          {tag}
        </li>
      ))}
    </ul>
  );
};
