import { followUser, unfollowUser } from '@/app/lib/data/user';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const params = new URLSearchParams(request.nextUrl.searchParams);
  const username = params.get('username');
  const follow = params.get('follow');
  const TOGGLE = follow === 'follow' ? followUser : unfollowUser;

  if (username) {
    const { profile } = await TOGGLE(username);

    return NextResponse.json({ profile });
  }

  return NextResponse.json({ error: true });
};
