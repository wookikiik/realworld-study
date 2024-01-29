import { useImmerReducer } from 'use-immer';

export const TASKS_ACTIONS = {
  ADD_TASK: 'add_task',
  UPDATE_TASK: 'update_task',
  DELETE_TASK: 'delete_task',
  DONE_TASK: 'done_task',
};
Object.freeze(TASKS_ACTIONS);

export function useTasks() {
  return useImmerReducer(tasksReducer, initialTasks);
}

function tasksReducer(draft, action) {
  switch (action.type) {
    case TASKS_ACTIONS.ADD_TASK: {
      draft.push({
        id: draft.length,
        text: action.text,
        done: false,
      });
      break;
    }
    case TASKS_ACTIONS.UPDATE_TASK: {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case TASKS_ACTIONS.DELETE_TASK:
      return draft.filter((t) => t.id !== action.id);
    case TASKS_ACTIONS.DONE_TASK:
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    default:
      throw Error('Action Not Found!');
  }
}

const initialTasks = [
  { id: 0, text: '카프카 박물관 방문하기', done: true },
  { id: 1, text: '인형극 보기', done: false },
];
