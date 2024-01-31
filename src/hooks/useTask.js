import { useImmerReducer } from "use-immer";
import {
  tasksReducer,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../reducers/task";

export default function useTask(initialTasks) {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function nextId() {
    if (tasks.length === 0) return 0;
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), -1);
    return maxId + 1;
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
    actions: {
      addTask,
      updateTask,
      deleteTask,
    },
  };
}
