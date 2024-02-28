export default async function FeedTab({ tabs }: FeedTabProps) {
  return (
    <ul className="nav nav-pills outline-active">
      {tabs.map((tab) => {
        const permissions = tab.permissions || (() => true);
        if (!permissions()) {
          return null;
        }

        return (
          <li key={tab.src} className="nav-item">
            <a className="nav-link active" href={tab.src}>
              {tab.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

type FeedTabProps = {
  tabs: {
    name: string;
    src: string;
    permissions?: () => boolean;
  }[];
};
