import {
  addComment,
  deleteComment,
  fetchComments,
} from '@/app/lib/data/article';
import { NextRequest, NextResponse } from 'next/server';

/**
 * 댓글 조회
 */
export const GET = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [_slug] = slug;

  const { comments } = await fetchComments(_slug);

  return NextResponse.json({ comments });
};

/**
 * 댓글 등록
 */
export const POST = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [_slug] = slug;

  const { comment: body }: { comment: string } = await request.json();

  // 댓글 등록
  const { comment } = await addComment(_slug, body);
  return NextResponse.json({ comment });
};

/**
 * 댓글 삭제
 */
export const DELETE = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [_slug, _commentId] = slug;

  // 댓글 삭제
  await deleteComment(_slug, _commentId);
  return NextResponse.json({});
};
