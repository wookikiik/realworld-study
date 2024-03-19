import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Article } from "@/app/lib/definitions";
import createSelectors from "./selectors";

type Store = {
  article: Partial<Article>;
  init: (article: Article) => void;
  follow: () => void;
  unfollow: () => void;
  favorite: () => void;
  unfavorite: () => void;
  // getAuthor: () => Profile | undefined;
  // getFollowStatus: () => boolean;
};

// define the initial state
const initialState: Partial<Article> = {};

export const useArticleStoreBase = create<Store>()(
  immer((set) => ({
    article: initialState,
    init: (article: Article) => set({ article }),
    follow: () => {
      set((state) => {
        if (state.article.author) {
          state.article.author.following = true;
        }
      });
    },
    unfollow: () => {
      set((state) => {
        if (state.article.author) {
          state.article.author.following = false;
        }
      });
    },
    favorite: () => {
      set((state) => {
        if (state.article.favoritesCount) {
          state.article.favoritesCount += 1;
        }
      });
    },
    unfavorite: () => {
      set((state) => {
        if (state.article.favoritesCount) {
          state.article.favoritesCount -= 1;
        }
      });
    },
  })),
);

export default createSelectors(useArticleStoreBase);

// selectors
// getAuthor: () => get().article?.author,
// getFollowStatus: () => {
//   const author = get().getAuthor();
//   return author?.following ?? false;
// },

// export const initArticle = useArticleStore.use.init();
// export const author = useArticleStore.use.article()?.author;
// export const followStatus = author?.following ?? false;
// export const follow = useArticleStore.use.follow();
// export const unfollow = useArticleStore.use.unfollow();
// export const favoritesCount =
//   useArticleStore.use.article()?.favoritesCount || 0;
