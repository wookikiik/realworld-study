'use client';

import { Comment } from './comment/comment';
import { CommentEditor } from './comment/commentEditor';
import { Tags as ArticleTags } from '../../../ui/components/tag/tags';
import { ArticleHeader } from '../../../ui/components/header/acticleHeader';
import { ArticleMeta } from './articleMeta';
import { source_serif_pro } from '@/app/styles/fonts';

export function Article() {
  return (
    <div className="article-page">
      <ArticleHeader />

      {/* TODO: acticle container ?? */}
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>
              Web development technologies have evolved at an incredible clip
              over the past few years.
            </p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>It's a great solution for learning how other frameworks work.</p>
            <ArticleTags />
          </div>
        </div>

        <hr />
        <div className="article-actions">
          <ArticleMeta />
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
}
