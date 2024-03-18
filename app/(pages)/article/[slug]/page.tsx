import ReactMarkdown from "react-markdown";
import { auth } from "@/auth";
import { fetchArticle, fetchComments } from "@/app/lib/data";
import { TagList } from "@/app/ui/components";
import { ArticleMeta, Comments, PostComment } from "./_components";
import AuthorFollowProvider from "./_providers/AuthorFollowProvider";

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
    <AuthorFollowProvider author={article.author}>
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
              <p>{article.description}</p>
              <ReactMarkdown>{article.body}</ReactMarkdown>
              <TagList tags={article.tagList} />
            </div>
          </div>

          <hr />

          <div className="article-actions">
            <ArticleMeta article={article} />
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              {!!user && !isArticleAuthor && <PostComment />}
              <Comments comments={comments} />
            </div>
          </div>
        </div>
      </div>
    </AuthorFollowProvider>
  );
}

type PageProps = {
  params: {
    slug: string;
  };
};
