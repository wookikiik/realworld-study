import { getProfile } from '@/app/lib/data';
import { Articles } from '@/app/ui/components/article/Articles';
import {
  EditProfileButton,
  FollowButton,
} from '@/app/ui/components/profile/ProfileButtons';
import { FeedTab } from '@/app/ui/components/tab/FeedTab';
import Image from 'next/image';

export interface Tab {
  name: string;
  display: string;
  query: any;
}

interface ProfilePageProps {
  params: { username: string };
  searchParams: {
    tab: string;
    page?: string;
  };
}
export default async function Page({
  params: { username },
  searchParams: { tab, page },
}: ProfilePageProps) {
  const { profile } = await getProfile(username);

  const feedTabs = [
    {
      name: 'my', //
      display: 'My Articles', //
      query: `author=${username}`,
    },
    {
      name: 'favorited', //
      display: 'Favorited Articles', //
      query: `favorited=${username}`,
    },
  ];

  const query: string[] = [];
  tab && query.push(feedTabs.find((t) => t.name === tab)?.query || '');
  page && query.push(`offset=${page}`);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <Image
                src={profile?.image || ''}
                alt=""
                className="user-img"
                width={512}
                height={512}
              />
              <h4>{profile?.username}</h4>
              <p>{profile?.bio}</p>
              <FollowButton profile={profile} className="action-btn" />
              <EditProfileButton profile={profile} className="action-btn" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <FeedTab tabs={feedTabs} activeTab={tab || 'favorited'} />
            </div>
            <Articles query={query.join('&')} />
          </div>
        </div>
      </div>
    </div>
  );
}
