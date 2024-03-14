"use client";

export default function FeedTabs({ cssStyle, tabs, onChnageTab }: Props) {
  function handleChnageTab(
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: string,
  ) {
    e.preventDefault();
    onChnageTab(tab);
  }

  return (
    <div className={cssStyle}>
      <ul className="nav nav-pills outline-active">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <a
              className={`nav-link ${tab.active ? "active" : ""}`}
              href="#"
              data-tab={tab.id}
              onClick={(e) => handleChnageTab(e, tab.id)}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Props {
  cssStyle: string;
  tabs: { id: string; name: string; active: boolean }[];
  onChnageTab: (tab: string) => void;
}
