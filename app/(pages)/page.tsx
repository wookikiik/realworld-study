import { titillium_web } from "@/app/ui/fonts";
import { PopularTags, ArticlesByTabs } from "@/app/ui/components";
import type { Metadata } from "next";
import { fetchAllTag } from "../lib/data";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Home - Conduit",
};

export default async function Home({
  searchParams: { feed },
}: {
  searchParams: { feed?: string };
}) {
  const tagsData = await fetchAllTag();

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
            <Suspense key={feed || "global"} fallback={<div>Loading...</div>}>
              <ArticlesByTabs currentFeed={feed || "global"} />
            </Suspense>
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
