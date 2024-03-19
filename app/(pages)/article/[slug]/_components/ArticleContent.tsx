"use client";

import { Article } from "@/app/lib/definitions";
import ReactMarkdown from "react-markdown";
import { ArticleMeta } from ".";
import { TagList } from "@/app/ui/components";
import useArticleStore from "@/app/lib/store/article";

export default function ArticleContent({
  article,
  children,
}: ArticleContentProps) {
  const initArticle = useArticleStore.use.init();
  initArticle(article);

  return (
    <>
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleMeta article={article} />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article.description}</p>
            <ReactMarkdown>{article.body}</ReactMarkdown>
            <TagList tags={article.tagList} />
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <ArticleMeta article={article} />
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
