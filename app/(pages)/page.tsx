import { titillium_web } from "@/app/ui/fonts";
import {
  PopularTags,
  ArticlesWithPagination,
  HomeFeedTab,
} from "@/app/ui/components";
import type { Metadata } from "next";
import { fetchAllTag } from "../lib/data";
import { Suspense } from "react";
import { auth } from "@/auth";
export const metadata: Metadata = {
  title: "Home - Conduit",
};

export default async function Home({
  searchParams: { feed, tag, page = 1 },
}: HomeProps) {
  const tagsData = await fetchAllTag();
  const session = await auth();
  const user = session?.user;

  const currentFeed = feed || (user ? "feed" : "global");
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
            <Suspense fallback={<div>Loading...</div>}>
              <HomeFeedTab feed={currentFeed} tag={tag} />
              <ArticlesWithPagination feed={currentFeed} tag={tag} />
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

type HomeProps = {
  searchParams: {
    feed?: string; //
    tag?: string;
    page?: number;
  };
};
