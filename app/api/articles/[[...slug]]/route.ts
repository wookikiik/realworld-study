import { fetchArticles, fetchFeedArticles } from '@/app/lib/data/article';
import { NextRequest } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const searchParams = new URLSearchParams(request.nextUrl.searchParams);

  if (!!slug) {
    const [_type] = slug;
    const { articles, articlesCount } = await fetchFeedArticles(
      searchParams.toString()
    );
    return Response.json({ articles, articlesCount });
  }

  const { articles, articlesCount } = await fetchArticles(
    searchParams.toString()
  );
  return Response.json({ articles, articlesCount });
};
