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
};

// define the initial state
const initialState: Partial<Article> = {};

export const useArticleStoreBase = create<Store>()(
  immer((set) => ({
    article: initialState,
    init: (article: Article) => set({ article }),
    follow: () =>
      set((state) => {
        if (state.article.author) {
          state.article.author.following = true;
        }
      }),
    unfollow: () =>
      set((state) => {
        if (state.article.author) {
          state.article.author.following = false;
        }
      }),
    favorite: () =>
      set((state) => {
        if (state.article.favoritesCount) {
          state.article.favoritesCount += 1;
        }

        if (state.article.favorited) {
          state.article.favorited = false;
        }
      }),
    unfavorite: () =>
      set((state) => {
        if (state.article.favoritesCount) {
          state.article.favoritesCount -= 1;
        }

        if (state.article.favorited) {
          state.article.favorited = false;
        }
      }),
  })),
);

export default createSelectors(useArticleStoreBase);
