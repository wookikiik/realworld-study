import { getAtricle } from '@/app/lib/actions/articleActions';
import { Article } from '@/app/ui/components/article/Article';

/**
 * 게시물 상세 페이지
 */
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { article } = await getAtricle(slug);

  return <Article article={article} />;
}
