export async function POST(
  request: Request,
  { params: { slug } }: { params: { slug: string } },
) {
  console.log(slug);
  return Response.json({});
}
