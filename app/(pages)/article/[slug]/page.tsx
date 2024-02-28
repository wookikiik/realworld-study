import { fetchArticle, fetchComments } from "@/app/lib/data";
import { useAuth } from "@/app/lib/hooks";
import { TagList } from "@/app/ui/components";
import ArticleMeta from "./_components/ArticleMeta";
import Comments from "./_components/Comments";
import PostComment from "./_components/PostComment";
export default async function Page({ params: { slug } }: PageProps) {
  const [article, comments] = await Promise.all([
    fetchArticle(slug).then((data) => data.article),
    fetchComments(slug).then((data) => data.comments),
  ]);
  const { user, isLogined } = await useAuth();

  const isArticleAuthor = user?.name === article.author.username;

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
            <p>
              Web development technologies have evolved at an incredible clip
              over the past few years.
            </p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>
              It&apos;s a great solution for learning how other frameworks work.
            </p>
            <TagList tags={article.tagList} />
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <ArticleMeta article={article} />
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            {isLogined && !isArticleAuthor && <PostComment />}
            <Comments comments={comments} />
          </div>
        </div>
      </div>
    </div>
  );
}

type PageProps = {
  params: {
    slug: string;
  };
};
