import { useReducer } from "react";

const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";

export default function useTask(initialTasks) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function nextId() {
    if (tasks.length === 0) return 0;
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), -1);
    return maxId + 1;
  }

  function tasksReducer(tasks, action) {
    switch (action.type) {
      case ADD_TASK:
        return [...tasks, action.task];
      case UPDATE_TASK:
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      case DELETE_TASK:
        return tasks.filter((t) => t.id !== action.id);
      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  function addTask(text) {
    dispatch({
      type: ADD_TASK,
      task: {
        id: nextId(),
        text,
        done: false,
      },
    });
  }

  function deleteTask(id) {
    dispatch({
      type: DELETE_TASK,
      id,
    });
  }

  function updateTask(task) {
    dispatch({
      type: UPDATE_TASK,
      task,
    });
  }

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
}
