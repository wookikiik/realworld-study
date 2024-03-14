import { Suspense } from 'react';
import { PROFILE_FAVORITED_TAB, PROFILE_FEED_TABS } from '../../constants/tabs';
import { ArticlesSkeleton } from '../../skeletons/article/Articles';
import { Articles } from '../article/Articles';
import { FeedTab } from './FeedTab';

interface ProfileFeedProps {
  tab?: string;
  page?: string;
  username: string;
}
export const ProfileFeed = async ({
  tab = PROFILE_FAVORITED_TAB.query.tab || 'my',
  page = '1',
  username,
}: ProfileFeedProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <div className="articles-toggle">
            <FeedTab current={tab} tabs={PROFILE_FEED_TABS} />
          </div>
          <Suspense fallback={<ArticlesSkeleton />}>
            <Articles query={{ tab }} page={page} author={username} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
