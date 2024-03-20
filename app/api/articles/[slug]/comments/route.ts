import { fetchComments, createComment, deleteComment } from "@/app/lib/data";

export async function GET(
  request: Request,
  { params: { slug } }: { params: { slug: string } },
) {
  const data = await fetchComments(encodeURIComponent(slug)).then(
    (data) => data.comments,
  );
  return Response.json(data);
}

export async function POST(
  request: Request,
  { params: { slug } }: { params: { slug: string } },
) {
  const { comment } = (await request.json()) as { comment: string };
  const data = await createComment(slug, comment).then((data) => data.comment);
  return Response.json(data);
}

export async function DELETE(
  request: Request,
  { params: { slug } }: { params: { slug: string } },
) {
  const { id } = (await request.json()) as { id: string };
  await deleteComment(slug, id);
  return Response.json({ id });
}
