import { auth } from "@/auth";
import { fetchArticle, fetchComments } from "@/app/lib/data";
import { ArticleContent, Comment } from "./_components";

export default async function Page({ params: { slug } }: PageProps) {
  const [article, comments] = await Promise.all([
    fetchArticle(slug)
      .then((data) => {
        if ("errors" in data) {
          throw new Error(data.errors.body.join(", "));
        }
        return data;
      })
      .then((data) => data.article),
    fetchComments(slug).then((data) => data.comments),
  ]);

  const session = await auth();
  const user = session?.user;

  const isArticleAuthor = user?.name === article.author.username;

  return (
    <div className="article-page">
      <ArticleContent article={article}>
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <Comment
              user={{
                username: user?.name || "",
                image: user?.image || "",
              }}
              article={article}
              comments={comments}
            />
          </div>
        </div>
      </ArticleContent>
    </div>
  );
}

type PageProps = {
  params: {
    slug: string;
  };
};
