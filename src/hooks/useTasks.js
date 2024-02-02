import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

const TasksContext = createContext();
const initialTasks = [
  { id: 0, text: "카프카 박물관 방문하기", done: true },
  { id: 1, text: "인형극 보기", done: false },
];

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

function useTasksReducer(initialTasks) {
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

  function updateTask(task) {
    dispatch({
      type: UPDATE_TASK,
      task,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: DELETE_TASK,
      id,
    });
  }

  const actions = {
    addTask,
    updateTask,
    deleteTask,
  };

  return {
    tasks,
    actions,
  };
}

function useTasks() {
  const { tasks, actions } = useContext(TasksContext);
  const { addTask, updateTask, deleteTask } = actions;
  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
}

function TasksProvider({ children }) {
  const { tasks, actions } = useTasksReducer(initialTasks);
  return (
    <TasksContext.Provider value={{ tasks, actions }}>
      {children}
    </TasksContext.Provider>
  );
}

export {
  useTasks, //
  TasksProvider,
};
