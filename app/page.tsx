import { titillium_web } from "@/app/ui/fonts";
import { Avatar, PopularTags, TagList, IconButton } from "@/app/ui/component";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Conduit",
};

export default function Home() {
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
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Avatar
                  profile={{
                    username: "Eric Simons",
                    image: "http://i.imgur.com/Qr71crq.jpg",
                  }}
                />
                <div className="info">
                  <a href="/profile/eric-simons" className="author">
                    Eric Simons
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <IconButton
                  icon="heart"
                  cssStyle="btn btn-outline-primary btn-sm pull-xs-right"
                >
                  {" "}
                  29
                </IconButton>
              </div>
              <a
                href="/article/how-to-build-webapps-that-scale"
                className="preview-link"
              >
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">
                    realworld
                  </li>
                  <li className="tag-default tag-pill tag-outline">
                    implementations
                  </li>
                </ul>
              </a>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Avatar
                  profile={{
                    username: "Albert Pai",
                    image: "http://i.imgur.com/N4VcUeJ.jpg",
                  }}
                />
                <div className="info">
                  <a href="/profile/albert-pai" className="author">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <IconButton
                  icon="heart"
                  cssStyle="btn btn-outline-primary btn-sm pull-xs-right"
                >
                  {" "}
                  32
                </IconButton>
              </div>
              <a href="/article/the-song-you" className="preview-link">
                <h1>
                  The song you won&apos;t ever stop singing. No matter how hard
                  you try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <TagList tags={["realworld", "implementations"]} />
              </a>
            </div>

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">
                  2
                </a>
              </li>
            </ul>
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
