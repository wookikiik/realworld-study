import {
  deleteArticle,
  favoriteArticle,
  fetchArticle,
  unfavoriteArticle,
} from '@/app/lib/data/article';
import { NextRequest, NextResponse } from 'next/server';

/**
 * 게시물 조회
 */
export const GET = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [_slug] = slug;

  const { article } = await fetchArticle(_slug);
  return NextResponse.json({ article });
};

/**
 * 게시물 등록 / 즐겨찾기 등록
 */
export const POST = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [_slug, favorite] = slug;

  if (favorite) {
    // 즐겨찾기 등록
    const { article } = await favoriteArticle(_slug);
    return NextResponse.json({ article });
  }

  // 게시물 등록
  // const { article } = await createArticle(id);
  return NextResponse.json({ type: 'POST', id: _slug });
};

/**
 * 게시물 수정
 */
export const PUT = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [_slug] = slug;

  // 게시물 수정
  // const { article } = await updateArticle(id);
  return NextResponse.json({ type: 'PUT', _slug });
};
/**
 * 게시물 삭제 / 즐겨찾기 해제
 */
export const DELETE = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [_slug, favorite] = slug;

  if (favorite) {
    // 즐겨찾기 해제
    const { article } = await unfavoriteArticle(_slug);
    return NextResponse.json({ article });
  }

  // 게시물 삭제
  await deleteArticle(_slug);
  return NextResponse.json({});
};
