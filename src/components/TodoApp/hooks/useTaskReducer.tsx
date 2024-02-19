import { useReducer } from 'react';
import {
  TaskContextData,
  Task,
  TaskAction,
  UpdateTaskParams,
} from '../../../types/task';

const ADD_TASK = 'add_task';
const UPDATE_TASK = 'update_task';
const DELETE_TASK = 'delete_task';
const TOGGLE_ALL_TASKS = 'toggle_all_tasks';
const TOGGLE_TASK = 'toggle_task';
const CLEAR_TASKS = 'clear_tasks';

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  const payload = action.payload;

  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: state.length,
        title: payload.title,
        completed: false,
      };
      return [...state, newTask];

    case UPDATE_TASK:
      return state.map((t) =>
        t.id === payload.id ? { ...t, title: payload.title } : t
      );

    case DELETE_TASK:
      return state.filter((t) => t.id !== payload.taskId);

    case TOGGLE_ALL_TASKS:
      return state.map((t) => {
        return {
          ...t,
          completed: payload.completed,
        };
      });
    case TOGGLE_TASK:
      return state.map((t) =>
        t.id === payload.taskId ? { ...t, completed: !t.completed } : t
      );

    case CLEAR_TASKS:
      return state.filter((t) => !t.completed);
    default:
      return state;
  }
};

/**
 * Tasks 상태 관리 hook
 */
export const useTaskReducer = (initialTaskList: Task[]): TaskContextData => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTaskList);

  /**
   * Add NEW task
   *
   * @param {string} title title of new task
   */
  function addTask(title: string) {
    dispatch({
      type: ADD_TASK,
      payload: {
        title,
      },
    });
  }

  /**
   * Update task title
   *
   * @param {{id, title}}
   */
  function updateTask({ id, title }: UpdateTaskParams) {
    dispatch({
      type: UPDATE_TASK,
      payload: {
        id,
        title,
      },
    });
  }

  /**
   * Delete task
   *
   * @param {number} taskId task id
   */
  function deleteTask(taskId: number) {
    dispatch({
      type: DELETE_TASK,
      payload: {
        taskId,
      },
    });
  }

  /**
   * Toggle all task's completed
   *
   * @param {boolean} completed
   */
  function toggleAllTask(completed: boolean) {
    dispatch({
      type: TOGGLE_ALL_TASKS,
      payload: {
        completed,
      },
    });
  }

  /**
   * Toggle task's completed
   *
   * @param {boolean} taskId
   */
  function toggleTask(taskId: number) {
    dispatch({
      type: TOGGLE_TASK,
      payload: {
        taskId,
      },
    });
  }

  /**
   * Clear completed task
   */
  function clearTasks() {
    dispatch({
      type: CLEAR_TASKS,
    });
  }

  return {
    tasks,
    actions: {
      addTask,
      updateTask,
      deleteTask,
      toggleAllTask,
      toggleTask,
      clearTasks,
    },
  };
};
