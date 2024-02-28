import { titillium_web } from "@/app/ui/fonts";
import {
  PopularTags,
  FeedTab,
  Pagination,
  ArticlePreviews,
} from "@/app/ui/component";
import type { Metadata } from "next";
import { fetchAllArticle } from "./lib/data";

export const metadata: Metadata = {
  title: "Home - Conduit",
};

export default async function Home() {
  const articlesData = await fetchAllArticle();

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className={`${titillium_web.className} logo-font`}>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedTab />
            <ArticlePreviews articles={articlesData.articles} />
            <Pagination total={5} current={1} />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <PopularTags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
