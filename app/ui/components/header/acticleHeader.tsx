import { Article } from '@/app/lib/definitions';
import { ArticleMeta } from '../article/ArticleMeta';

interface ArticleHeaderProps {
  article: Article;
}
export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <div className="banner">
      <div className="container">
        <h1>{article.title}</h1>

        <ArticleMeta article={article} />
      </div>
    </div>
  );
};
