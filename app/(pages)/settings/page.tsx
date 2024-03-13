import { getCurrentUser } from '@/app/lib/data';
import SettingForm from '@/app/ui/components/user/SettingForm';
import LogoutButton from '../../ui/components/user/Logout';

export default async function Page() {
  const { user } = await getCurrentUser();

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
