import { ProfileFeed } from '@/app/ui/components/feed/ProfileFeed';
import { Profile } from '@/app/ui/components/profile/Profile';

interface ProfilePageProps {
  params: { username: string };
  searchParams: {
    tab?: 'my' | 'favorited';
    page?: string;
  };
}
export default async function Page({
  params: { username },
  searchParams: { tab, page },
}: ProfilePageProps) {
  return (
    <div className="profile-page">
      <Profile username={username} />

      <ProfileFeed tab={tab} page={page} username={username} />
    </div>
  );
}
