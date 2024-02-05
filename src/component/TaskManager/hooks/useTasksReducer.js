import { useImmerReducer } from 'use-immer';

export const ADD_TASK = 'add_task';
export const UPDATE_TASK = 'update_task';
export const DELETE_TASK = 'delete_task';
export const DONE_TASK = 'done_task';

const initialTasks = [
  { id: 0, text: '카프카 박물관 방문하기', done: true },
  { id: 1, text: '인형극 보기', done: false },
];

export function useTasksReducer(tasks = initialTasks) {
  return useImmerReducer(tasksReducer, tasks);
}

function tasksReducer(draft, action) {
  switch (action.type) {
    case ADD_TASK: {
      draft.push({
        id: draft.length,
        text: action.text,
        done: false,
      });
      break;
    }
    case UPDATE_TASK: {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case DELETE_TASK:
      return draft.filter((t) => t.id !== action.id);
    case DONE_TASK:
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    default:
      throw Error(`[${action.type}] - Action Not Found!`);
  }
}
