import {
  //
  followUser,
  unfollowUser,
} from "@/app/lib/data";

/**
 * Follow user
 * @param {Request} request
 * @param {FollowParams} params
 */
export async function POST(
  request: Request,
  { params: { username } }: FollowParams,
) {
  const data = await followUser(username);
  return Response.json(data);
}

/**
 * Unfollow user
 * @param {Request} request
 * @param {FollowParams} params
 */

export async function DELETE(
  request: Request,
  { params: { username } }: { params: { username: string } },
) {
  const data = await unfollowUser(username);
  return Response.json(data);
}

interface FollowParams {
  params: {
    username: string;
  };
}
