import { Pagination, ArticlePreviews } from "@/app/ui/components";
import { ArticlesResponse } from "@/app/lib/definitions";

export default async function Articles({ articles }: ArticlesProps) {
  return (
    <>
      <ArticlePreviews articles={articles.articles} />
      <Pagination total={articles.articlesCount} current={1} />
    </>
  );
}

type ArticlesProps = {
  articles: ArticlesResponse;
};
