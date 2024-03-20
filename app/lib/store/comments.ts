import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Comment } from "@/app/lib/definitions";
import createSelectors from "./selectors";

type Store = {
  comments: Comment[];
  init: (comments: Comment[]) => void;
  load: (slug: string) => Promise<void>;
};

// define the initial state
const initialState: Comment[] = [];

export const useCommentsStoreBase = create<Store>()(
  immer((set) => ({
    comments: initialState,
    init: (comments: Comment[]) => set({ comments }),
    load: async (slug: string) => {
      const response = await fetch(`/api/articles/${slug}/comments`);
      const comments = await response.json();
      console.log(comments);
      set({ comments });
    },
  })),
);

export default createSelectors(useCommentsStoreBase);
