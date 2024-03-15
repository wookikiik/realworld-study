import { getAuth } from '@/app/lib/utils/authentication';
import { Suspense } from 'react';
import {
  MAIN_FEED_TABS,
  MAIN_FEED_TABS_FOR_ANONYMOUS,
  MAIN_GLOBAL_FEED_TAB,
} from '../../constants/tabs';
import { ArticlesSkeleton } from '../../skeletons/article/Articles';
import { Articles } from '../article/Articles';
import { PopularTags } from '../tag/PopularTags';
import { FeedTab } from './FeedTab';

interface MainFeedProps {
  feed?: string;
  tag?: string;
  page?: string;
}
export const MainFeed = async ({
  feed = MAIN_GLOBAL_FEED_TAB.query.feed || 'global',
  tag,
  page = '1',
}: MainFeedProps) => {
  const { user, authenticated } = await getAuth();
  const FEED_TABS = authenticated
    ? MAIN_FEED_TABS
    : MAIN_FEED_TABS_FOR_ANONYMOUS;

  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <div className="feed-toggle">
            <FeedTab current={tag ? tag : feed} tabs={FEED_TABS} tag={tag} />
          </div>
          <Suspense fallback={<ArticlesSkeleton />}>
            <Articles
              query={tag ? { tag } : { feed }}
              page={page}
              author={user?.username}
            />
          </Suspense>
        </div>
        <PopularTags />
      </div>
    </div>
  );
};
