import {
  fetchCurrentUser,
  fetchProfile,
  followUser,
  unfollowUser,
} from '@/app/lib/data/user';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [username] = slug;

  if (username) {
    const { profile } = await fetchProfile(username);
    return NextResponse.json({ profile });
  }

  const { user } = await fetchCurrentUser();
  return NextResponse.json({ user });
};

export const POST = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [username, follow] = slug;

  if (follow) {
    const { profile } = await followUser(username);
    return NextResponse.json({ profile });
  }

  return NextResponse.json({});
};

export const DELETE = async (
  request: NextRequest,
  { params: { slug } }: { params: { slug: string[] } }
) => {
  const [username, follow] = slug;

  if (follow) {
    const { profile } = await unfollowUser(username);
    return NextResponse.json({ profile });
  }

  return NextResponse.json({});
};
