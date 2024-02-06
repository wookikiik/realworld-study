import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
// TODO action 타입 네이밍..

export const ACTION_TYPE_ADD = "add";
export const ACTION_TYPE_UPDATE = "update";
export const ACTION_TYPE_DELETE = "delete";

export function useTasks(initialTasks) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function addTask(newTitle) {
    dispatch({
      type: ACTION_TYPE_ADD,
      newTitle,
    });
  }

  /**
   * Update Task
   * @param {{id: string}} editTask
   */
  function updateTask(editTask) {
    dispatch({
      type: ACTION_TYPE_UPDATE,
      task: editTask,
    });
  }

  function deleteTask(deleteId) {
    dispatch({
      type: ACTION_TYPE_DELETE,
      deleteId,
    });
  }

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
}

function tasksReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE_ADD:
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.newTitle,
          completed: false,
        },
      ];
    case ACTION_TYPE_UPDATE:
      return state.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    case ACTION_TYPE_DELETE:
      return state.filter((task) => task.id !== action.deleteId);
    default:
      return state;
  }
}
