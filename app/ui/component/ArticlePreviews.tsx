import { Article } from "@/app/lib/definitions";
import Avatar from "./Avatar";
import IconButton from "./IconButton";

export default function ArticlePreviews({ articles }: ArticlePreviewProps) {
  return (
    <>
      {articles.map((article) => (
        <div key={article.slug} className="article-preview">
          <div className="article-meta">
            <Avatar profile={article.author}>
              <div className="info">
                <a href="/profile/eric-simons" className="author">
                  {article.author.username}
                </a>
                <span className="date">January 20th</span>
              </div>
            </Avatar>

            <IconButton
              icon="heart"
              cssStyle="btn btn-outline-primary btn-sm pull-xs-right"
            >
              {" "}
              {article.favoritesCount}
            </IconButton>
          </div>
          <a
            href="/article/how-to-build-webapps-that-scale"
            className="preview-link"
          >
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
            <TagList tags={article.tagList} />
          </a>
        </div>
      ))}
    </>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li key={index} className="tag-default tag-pill tag-outline">
          {tag}
        </li>
      ))}
    </ul>
  );
}

type ArticlePreviewProps = {
  articles: Article[];
};
