import {
  fetchArticleList,
  fetchArticleListFeed,
  mockupFetchArticleList,
} from "@/app/lib/data";
import { ArticlesResponse, ErrorResponse } from "@/app/lib/definitions";

export async function GET(
  request: Request,
  { params: { slug } }: { params: { slug: string[] } },
) {
  let data: ArticlesResponse | ErrorResponse = {
    articles: [],
    articlesCount: 0,
  };

  const [type, searchValue] = slug;
  // console.log("GET", type, searchValue);

  // data = await mockupFetchArticleList({});

  if (type === "author") {
    data = await fetchArticleList({
      author: searchValue,
    });
  } else if (type === "feed") {
    switch (searchValue) {
      case "global":
        data = await fetchArticleList({});
        break;
      case "feed":
        data = await fetchArticleListFeed();
        break;
    }
  } else if (type === "tag") {
    data = await fetchArticleList({ tag: searchValue });
  } else {
    data = await mockupFetchArticleList({});
  }

  return Response.json(data);
}
