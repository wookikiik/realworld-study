'use client';

import { Article as TypeOfArticle } from '@/app/lib/definitions';
import { useAuth } from '@/app/lib/hooks/useAuth';
import { useState } from 'react';
import { CommentEditor } from '../comment/CommentEditor';
import { CommentList } from '../comment/Comments';
import { Tags as ArticleTags } from '../tag/Tags';
import { ArticleMeta } from './ArticleMeta';

interface ArticleProps {
  article: TypeOfArticle;
}
export const Article = ({ article }: ArticleProps) => {
  const { authenticated } = useAuth();
  const [shouldFetchComments, setShouldFetchComments] = useState<boolean>(true);

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
        {/* TODO: CommentList State Provider */}
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            {authenticated && (
              <CommentEditor
                slug={article.slug}
                setShouldFetch={setShouldFetchComments}
              />
            )}

            <CommentList
              slug={article.slug}
              shouldFetch={shouldFetchComments}
              setShouldFetch={setShouldFetchComments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
