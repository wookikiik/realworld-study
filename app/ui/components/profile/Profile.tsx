import { fetchProfile } from '@/app/lib/data/user';
import Image from 'next/image';
import { EditProfileButton } from './buttons/EditProfileButton';
import { ProfileFollowButton } from './buttons/ProfileFollowButton';

interface ProfileProps {
  username: string;
}
export const Profile = async ({ username }: ProfileProps) => {
  const { profile } = await fetchProfile(username);

  return (
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
            <ProfileFollowButton profile={profile} className="action-btn" />
            <EditProfileButton profile={profile} className="action-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};
