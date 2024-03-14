export interface Tab {
  display: string;
  query: {
    tab?: string;
    feed?: string;
    tag?: string;
  };
  default: boolean;
}

export const MAIN_GLOBAL_FEED_TAB: Tab = {
  display: 'Global Feed', //
  query: { feed: 'global' },
  default: true,
};

export const MAIN_MY_FEED_TAB: Tab = {
  display: 'Your Feed', //
  query: { feed: 'feed' },
  default: false,
};

export const PROFILE_MY_TAB: Tab = {
  display: 'Your Article', //
  query: { tab: 'my' },
  default: false,
};

export const PROFILE_FAVORITED_TAB: Tab = {
  display: 'Favorited Article', //
  query: { tab: 'favorited' },
  default: false,
};

export const MAIN_FEED_TABS_FOR_ANONYMOUS: Tab[] = [MAIN_GLOBAL_FEED_TAB];
export const MAIN_FEED_TABS: Tab[] = [MAIN_MY_FEED_TAB, MAIN_GLOBAL_FEED_TAB];

export const PROFILE_FEED_TABS: Tab[] = [PROFILE_MY_TAB, PROFILE_FAVORITED_TAB];
