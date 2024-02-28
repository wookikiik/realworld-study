import { Pagination, ArticlePreviews } from "@/app/ui/components";
import { ArticlesResponse } from "@/app/lib/definitions";

export default function Articles({ tab, articles }: ArticlesProps) {
  return (
    <>
      {tab}
      <ArticlePreviews articles={articles.articles} />
      <Pagination total={articles.articlesCount} current={1} />
    </>
  );
}

type ArticlesProps = {
  tab: React.ReactNode;
  articles: ArticlesResponse;
};
