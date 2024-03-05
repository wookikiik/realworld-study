import { Article } from "@/app/lib/definitions";
import FollowActions from "./FollowActions";
import AuthorAvatar from "@/app/ui/components/AuthorAvatar";

export default function ArticleMeta({ article }: ArticleMetaProps) {
  return (
    <div className="article-meta">
      <AuthorAvatar author={article.author} />
      <FollowActions article={article} />
    </div>
  );
}

type ArticleMetaProps = {
  article: Article;
};
