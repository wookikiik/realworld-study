import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Comment } from "@/app/lib/definitions";
import createSelectors from "./selectors";

type Store = {
  comments: Comment[];
  init: (comments: Comment[]) => void;
  add: (comment: Comment) => void;
  remove: (id: number) => void;
};

// define the initial state
const initialState: Comment[] = [];

export const useCommentsStoreBase = create<Store>()(
  immer((set) => ({
    comments: initialState,
    init: (comments: Comment[]) => set({ comments }),
    add: (comment: Comment) => set(({ comments }) => comments.push(comment)),
    remove: (id) =>
      set(({ comments }) => comments.filter((comment) => comment.id !== id)),
  })),
);

export default createSelectors(useCommentsStoreBase);
