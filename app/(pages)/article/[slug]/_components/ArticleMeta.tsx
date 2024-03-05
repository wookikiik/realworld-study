import { Article } from "@/app/lib/definitions";
import { Avatar } from "@/app/ui/components";
import FollowActions from "./FollowActions";

export default function ArticleMeta({ article }: ArticleMetaProps) {
  return (
    <div className="article-meta">
      <Avatar profile={article.author} />
      <div className="info">
        <a href="/profile/eric-simons" className="author">
          {article.author.username}
        </a>
        <span className="date">January 20th</span>
      </div>
      <FollowActions article={article} />
    </div>
  );
}

type ArticleMetaProps = {
  article: Article;
};
