"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function FeedTabs({ tabs }: ComponentProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleTabChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    const feed = e.currentTarget.getAttribute("href");
    if (feed) {
      params.set("feed", feed);
      feed === "tag" //
        ? params.set("tag", "tag")
        : params.delete("tag");
    } else {
      params.delete("feed");
      params.delete("tag");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <ul className="nav nav-pills outline-active">
      {tabs.map((tab) => (
        <li key={tab.href} className="nav-item">
          <a
            className={`nav-link ${tab.active ? "active" : ""}`}
            href={tab.href}
            onClick={handleTabChange}
          >
            {tab.name}
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
  name: string;
  href: string;
  active: boolean;
};
