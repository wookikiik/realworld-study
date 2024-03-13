import { getAuth } from './lib/utils/authentication';
import { Articles } from './ui/components/article/Articles';
import { FeedTab } from './ui/components/tab/FeedTab';
import { PopularTags } from './ui/components/tag/PopularTags';

interface PageProps {
  searchParams: {
    tab: string;
    page?: string;
  };
}
export default async function Page({ searchParams: { tab, page } }: PageProps) {
  const { session } = await getAuth();

  let feedTabs = [
    {
      name: 'global',
      display: 'Global Feed',
      query: '',
    },
  ];

  if (session) {
    feedTabs = [
      {
        name: 'my', //
        display: 'Your Feed',
        query: `?author=${session.user?.username}`,
      },
      ...feedTabs,
    ];
  }

  const query: string[] = [];
  tab && query.push(feedTabs.find((t) => t.name === tab)?.query || '');
  page && query.push(`offset=${page}`);

  return (
    <div className="home-page">
      <TitleBanner />

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <FeedTab tabs={feedTabs} activeTab={tab || 'global'} />
            </div>
            <Articles query={query.join('&')} />
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
