import { titillium_web } from "@/app/ui/fonts";
import { PopularTags, HomeFeed } from "@/app/ui/components";
import type { Metadata } from "next";
import { fetchAllTag } from "../lib/data";
import { Suspense } from "react";
import { auth } from "@/auth";
export const metadata: Metadata = {
  title: "Home - Conduit",
};

export default async function Home({
  searchParams: { feed: searchFeed },
}: HomeProps) {
  const tagsData = await fetchAllTag();
  const session = await auth();
  const user = session?.user;

  let feed = undefined;
  let tag = undefined;

  if (!searchFeed) {
    feed = user ? "feed" : "global";
  } else {
    if (searchFeed !== "feed" && searchFeed !== "global") {
      tag = searchFeed;
    } else {
      feed = searchFeed;
    }
  }

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
              <HomeFeed feed={feed} tag={tag} />
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
    feed?: string;
  };
};
