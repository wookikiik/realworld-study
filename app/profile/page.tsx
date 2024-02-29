import { getCurrentUser } from "../lib/data";

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <div>
      <h1>Profile</h1>
      <p>This is {user.username} profile page</p>
    </div>
  );
}
