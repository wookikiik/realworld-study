import { fetchTags } from '@/app/lib/data/common';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { tags } = await fetchTags();

  return NextResponse.json({ tags });
};
