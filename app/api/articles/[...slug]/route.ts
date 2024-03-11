import { fetchArticleList, fetchArticleListFeed } from "@/app/lib/data";

export async function GET(
  request: Request,
  { params: { slug } }: { params: { slug: string[] } },
) {
  const [type, searchValue] = slug;
  if (type === "feed") {
    const data =
      searchValue === "global" //
        ? await fetchArticleList({})
        : await fetchArticleListFeed();

    return Response.json(data);
  }
  // TODO: search by tag
  else if (type === "tag") {
    console.log("search by tag", searchValue);
  }

  console.warn("Unknown feed type", type);
  return Response.json({ articles: [], articlesCount: 0 });
}
