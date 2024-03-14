import { Article as TypeOfArticle } from '@/app/lib/definitions';
import { Comment } from '../comment/Comment';
import { CommentEditor } from '../comment/CommentEditor';
import { Tags as ArticleTags } from '../tag/Tags';
import { ArticleMeta } from './ArticleMeta';

interface ArticleProps {
  article: TypeOfArticle;
}
export const Article = async ({ article }: ArticleProps) => {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

          <ArticleMeta article={article} />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article.body}</p>
            <ArticleTags article={article} />
          </div>
        </div>

        <hr />
        <div className="article-actions">
          <ArticleMeta article={article} />
        </div>
        {/* TODO: comment container ?? */}
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentEditor />

            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};
