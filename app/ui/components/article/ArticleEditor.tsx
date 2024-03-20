import { fetchArticle } from '@/app/lib/data/article';
import { Article } from '@/app/lib/definitions';
import { ArticleForm } from '../form/ArticleForm';

export const ArticleEditor = async ({ slug }: { slug?: string }) => {
  let article: Article | undefined = undefined;
  if (!!slug) {
    const { article: _article } = await fetchArticle(slug);
    article = _article;
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ArticleForm isEdit={!!slug} article={article} />
          </div>
        </div>
      </div>
    </div>
  );
};
