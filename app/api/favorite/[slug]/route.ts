import {
  //
  favoriteArticle,
  unfavoriteArticle,
} from "@/app/lib/data";

/**
 * Follow user
 * @param {Request} request
 * @param {FollowParams} params
 */
export async function POST(
  request: Request,
  { params: { slug } }: FollowParams,
) {
  const data = await favoriteArticle(slug);
  return Response.json(data);
}

/**
 * Unfollow user
 * @param {Request} request
 * @param {FollowParams} params
 */

export async function DELETE(
  request: Request,
  { params: { slug } }: FollowParams,
) {
  const data = await unfavoriteArticle(slug);
  return Response.json(data);
}

interface FollowParams {
  params: {
    slug: string;
  };
}
