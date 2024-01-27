import { useImmerReducer } from "use-immer";

const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";

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
    addTask,
    updateTask,
    deleteTask,
  };
}

function tasksReducer(draft, action) {
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
