import { titilliumWeb } from "./fonts";
import ArticlePreview from "./articlePreview";
import Pagination from "./pagination";
import ToggleTab from "./toggleTab";
import { getArticles, getFeed } from "../login/data";
import { auth } from "@/auth";


export default async function Home({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;    
  },  
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const session = await auth()
  const isLoggedIn = session?.user ? true : false;
  let articles = getArticles({});
  
  
  async function onToggle(feed: string) {
    if(feed === 'global') {
      articles = await getArticles({});
    }
    if(feed === 'feed') {
      articles = await getFeed();
    }
    console.log('onToggle');
  }

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
            <ToggleTab isLoggedIn={isLoggedIn} onToggle={onToggle}/>
            <ArticlePreview articles={articles} />
            <Pagination />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">programming</a>
                <a href="" className="tag-pill tag-default">javascript</a>
                <a href="" className="tag-pill tag-default">emberjs</a>
                <a href="" className="tag-pill tag-default">angularjs</a>
                <a href="" className="tag-pill tag-default">react</a>
                <a href="" className="tag-pill tag-default">mean</a>
                <a href="" className="tag-pill tag-default">node</a>
                <a href="" className="tag-pill tag-default">rails</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
