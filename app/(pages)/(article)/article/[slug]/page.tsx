import { getAtricle } from '@/app/lib/actions/articleActions';
import { Article } from '@/app/ui/components/article/Article';
import FavoriteProvider from '@/app/ui/providers/FavoriteProvider';
import FollowProvider from '@/app/ui/providers/FollowProvider';

/**
 * 게시물 상세 페이지
 */
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { article } = await getAtricle(slug);

  return (
    <FollowProvider follow={article.author.following}>
      <FavoriteProvider
        favorited={article.favorited}
        favoritesCount={article.favoritesCount}
      >
        <Article article={article} />
      </FavoriteProvider>
    </FollowProvider>
  );
}
