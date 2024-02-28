import { titillium_web } from "@/app/ui/fonts";
import { PopularTags, HomeFeedTab } from "@/app/ui/components";
import type { Metadata } from "next";
import { fetchAllArticle, fetchAllTag } from "../lib/data";
import Articles from "../ui/components/Articles";

export const metadata: Metadata = {
  title: "Home - Conduit",
};

export default async function Home() {
  const [articles, tagsData] = await Promise.all([
    fetchAllArticle(),
    fetchAllTag(),
  ]);

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
            <Articles tab={<HomeFeedTab />} articles={articles} />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <PopularTags tags={tagsData.tags} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
