export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function tasksReducer(draft, action) {
  switch (action.type) {
    case ADD_TASK:
      draft.push(action.task);
      break;
    case UPDATE_TASK:
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    case DELETE_TASK:
      return draft.filter((t) => t.id !== action.id);
    default:
      throw Error("Unknown action: " + action.type);
  }
}
