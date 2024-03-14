import { MainFeed } from '../ui/components/feed/MainFeed';

interface MainPageProps {
  searchParams: {
    feed?: 'global' | 'feed';
    tag?: string;
    page?: string;
  };
}
export default async function Page({
  searchParams: { feed, tag, page },
}: MainPageProps) {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <MainFeed feed={feed} tag={tag} page={page} />
    </div>
  );
}
