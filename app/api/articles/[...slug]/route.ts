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
  } else {
    data = await mockupFetchArticleList({});
  }
  // if (type === "feed") {
  //   switch (searchValue) {
  //     case "feed":
  //       data = await fetchArticleListFeed();
  //       break;
  //     case "global":
  //       data = await fetchArticleList({});
  //       break;
  //   }
  // } else if (type === "author") {
  //   data = await fetchArticleList({
  //     author: searchValue,
  //   });
  // } else if (type === "tag") {
  //   // console.log("search by tag", searchValue);
  // } else {
  //   console.log("Unknown feed type", type);
  // }

  return Response.json(data);
}
