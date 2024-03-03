import { ArticleMeta } from '../../../(pages)/(article)/_components/articleMeta';

export const ArticleHeader = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1>How to build webapps that scale</h1>

        <ArticleMeta />
      </div>
    </div>
  );
};
