"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function FeedTabs({ tabs }: ComponentProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleTabChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    const linkElement = e.target as HTMLAnchorElement;
    const dataset = linkElement.dataset;
    const group = dataset.group!!;
    const value = dataset.value!!;

    params.delete("tag");
    params.delete("feed");

    group //
      ? params.set(group, value)
      : params.delete(group);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <ul className="nav nav-pills outline-active">
      {tabs.map((tab) => (
        <li key={tab.id} className="nav-item">
          <a
            className={`nav-link ${tab.active ? "active" : ""}`}
            href="#"
            data-group={tab.group}
            data-value={tab.value}
            onClick={handleTabChange}
          >
            {tab.tabName}
          </a>
        </li>
      ))}
    </ul>
  );
}

export class FeedTabsBuilder {
  _tabs: FeedTab[] = [];

  addTab(tab: FeedTab) {
    this._tabs.push(tab);
    return this;
  }

  build() {
    return <FeedTabs tabs={this._tabs} />;
  }
}

type ComponentProps = {
  tabs: FeedTab[];
};

type FeedTab = {
  id: string;
  group: string;
  value: string;
  tabName: string;
  active: boolean;
};
