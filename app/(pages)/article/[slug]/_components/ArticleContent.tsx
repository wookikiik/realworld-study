"use client";

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FollowActions } from ".";
import { Article } from "@/app/lib/definitions";
import useArticleStore from "@/app/lib/store/article";
import { TagList, AuthorAvatar } from "@/app/ui/components";

export default function ArticleContent({
  article: initialArticle,
  children,
}: ArticleContentProps) {
  const author = initialArticle.author;
  const article = useArticleStore((state) => state.article);
  const onFollowAction = useArticleStore.use.follow();
  const onUnfollowAction = useArticleStore.use.unfollow();
  const onFavorite = useArticleStore.use.favorite();
  const onUnfavorite = useArticleStore.use.unfavorite();

  useEffect(() => {
    useArticleStore.getState().init(initialArticle);
  }, [initialArticle]);

  return (
    <>
      <div className="banner">
        <div className="container">
          <h1>{initialArticle.title}</h1>
          <div className="article-meta">
            <AuthorAvatar author={author} />
            <FollowActions
              article={article}
              author={author}
              onFollowAction={onFollowAction}
              onUnfollowAction={onUnfollowAction}
              onFavorite={onFavorite}
              onUnfavorite={onUnfavorite}
            />
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{initialArticle.description}</p>
            <ReactMarkdown>{initialArticle.body}</ReactMarkdown>
            <TagList tags={initialArticle.tagList} />
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <AuthorAvatar author={author} />
            <FollowActions
              article={article}
              author={author}
              onFollowAction={onFollowAction}
              onUnfollowAction={onUnfollowAction}
              onFavorite={onFavorite}
              onUnfavorite={onUnfavorite}
            />
          </div>
        </div>

        {children}
      </div>
    </>
  );
}

interface ArticleContentProps {
  article: Article;
  children: React.ReactNode;
}
