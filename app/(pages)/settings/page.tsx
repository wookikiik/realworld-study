import { getCurrentUser } from "@/app/lib/data";
import Form from "./_components/Form";
import LogoutButton from "./_components/LogoutButton";
import { UserWithoutToken } from "@/app/lib/definitions";

export default async function Page() {
  const profile = (await getCurrentUser().then(
    (data) => data.user,
  )) as UserWithoutToken;
  delete profile.token; // Don't send the token to the client

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <Form profile={profile} />
            <hr />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
