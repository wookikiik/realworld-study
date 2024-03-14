import { favoriteArticle, unfavoriteArticle } from '@/app/lib/data/article';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const params = new URLSearchParams(request.nextUrl.searchParams);
  const slug = params.get('slug');
  const favorite = params.get('favorite');
  const TOGGLE = favorite === 'favorite' ? favoriteArticle : unfavoriteArticle;

  if (slug) {
    const { article } = await TOGGLE(slug);

    return NextResponse.json({ article });
  }

  return NextResponse.json({ error: true });
};
