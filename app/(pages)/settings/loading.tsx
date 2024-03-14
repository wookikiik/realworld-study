import { SettingFormSkeleton } from '@/app/ui/skeletons/user/SettingForm';

export default function Loading() {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Loading...</h1>
            <SettingFormSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
