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

  // data = await fetchArticleList({});

  if (type === "author") {
    data = await fetchArticleList({
      author: searchValue,
    });
  }
  if (type === "feed") {
    switch (searchValue) {
      case "global":
        data = await fetchArticleList({});
        break;
    }
  } else {
    data = await mockupFetchArticleList({});
  }

  return Response.json(data);
}
