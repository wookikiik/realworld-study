import { ArticleEditor } from '@/app/ui/components/article/ArticleEditor';

/**
 * 게시물 수정 페이지
 */
export default function Page({ params }: { params: { slug: string } }) {
  return <ArticleEditor slug={params.slug} />;
}
