import { fetchCurrentUser } from '@/app/lib/data/user';
import SettingForm from '@/app/ui/components/form/SettingForm';
import LogoutButton from '../../ui/components/profile/buttons/LogoutButton';

export default async function Page() {
  const { user } = await fetchCurrentUser();

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <SettingForm user={user} />
            <hr />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
