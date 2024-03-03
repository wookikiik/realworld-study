import { Articles } from './(pages)/(article)/_components/articles';
import { FeedTab } from './ui/components/tab/feedTab';
import { PopularTags } from './ui/components/tag/popularTags';

export default function Page() {
  return (
    <div className="home-page">
      <TitleBanner />

      {/* TODO: feed container ?? */}
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <FeedTab />
            </div>
            <Articles />
          </div>
          <PopularTags />
        </div>
      </div>
    </div>
  );
}

const TitleBanner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};
