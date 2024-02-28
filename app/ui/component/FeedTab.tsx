import { useAuth } from "@/app/lib/hooks";

export default async function FeedTab() {
  const { user, isLogined } = await useAuth();

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isLogined && (
          <li className="nav-item">
            <a className="nav-link" href={`/#/${user?.name}`}>
              Your Feed
            </a>
          </li>
        )}
        <li className="nav-item">
          <a className="nav-link active" href="/#/global">
            Global Feed
          </a>
        </li>
      </ul>
    </div>
  );
}
