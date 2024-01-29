import { useReducer } from 'react';

export const TASKS_ACTIONS = {
  ADD_TASK: 'add_task',
  UPDATE_TASK: 'update_task',
  DELETE_TASK: 'delete_task',
  DONE_TASK: 'done_task',
};
Object.freeze(TASKS_ACTIONS);

export function useTasks() {
  return useReducer(tasksReducer, initialTasks);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case TASKS_ACTIONS.ADD_TASK:
      return [
        ...tasks,
        {
          id: tasks.length,
          text: action.text,
          done: false,
        },
      ];
    case TASKS_ACTIONS.UPDATE_TASK:
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    case TASKS_ACTIONS.DELETE_TASK:
      return tasks.filter((t) => t.id !== action.id);
    case TASKS_ACTIONS.DONE_TASK:
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    default:
      throw Error('Action Not Found!');
  }
}

const initialTasks = [
  { id: 0, text: '카프카 박물관 방문하기', done: true },
  { id: 1, text: '인형극 보기', done: false },
];
