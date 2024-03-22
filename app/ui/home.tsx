import { titilliumWeb } from "./fonts";
import ArticlePreview from "./articlePreview";
import Pagination from "./pagination";
import ToggleTab from "./toggleTab";
import { getFeed, getTags } from "../data";
import { auth } from "@/auth";
import Tags from "./tags";

export default async function Home({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
    tag?: string;
  },
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const searchTag = searchParams?.tag
  const session = await auth()
  const isLoggedIn = session?.user ? true : false;  
  const articles = await getFeed(query, currentPage.toString(), searchTag);
  const tags = await getTags();

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className={`${titilliumWeb} logo-font`}>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <ToggleTab isLoggedIn={isLoggedIn} />
            <ArticlePreview articles={articles?.articles} />
            <Pagination totalArticles={articles?.articlesCount}/> 
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <Tags tags={tags?.tags}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
