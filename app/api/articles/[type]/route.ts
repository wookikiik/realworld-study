import { fetchArticles, fetchFeedArticles } from '@/app/lib/data/article';
import { NextRequest } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params: { type } }: { params: { type: string } }
) => {
  const apiParams = new URLSearchParams(request.nextUrl.searchParams);
  const GET = type === 'feed' ? fetchFeedArticles : fetchArticles;
  const { articles, articlesCount } = await GET(apiParams.toString());

  return Response.json({ articles, articlesCount });
};
