import { v4 as uuidv4 } from "uuid";
import { useReducer, useContext, createContext } from "react";

const ACTION_TYPE_ADD = "add";
const ACTION_TYPE_UPDATE = "update";
const ACTION_TYPE_DELETE = "delete";

const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

function useTasksReducer(initialTasks) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  /**
   * Add Task
   * @param {string} newTitle
   */
  function addTask(newTitle) {
    dispatch({
      type: ACTION_TYPE_ADD,
      title: newTitle,
    });
  }

  /**
   * Update Task
   * @param {{id: string, title: string, completed: boolean}} editTask
   */
  function updateTask(editTask) {
    dispatch({
      type: ACTION_TYPE_UPDATE,
      task: editTask,
    });
  }

  /**
   * Delete Task
   * @param {string} deleteId
   */
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

export function TaskProvider({ children, initialTasks }) {
  return (
    <TasksContext.Provider value={useTasksReducer(initialTasks)}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const { tasks, addTask, updateTask, deleteTask } = useContext(TasksContext);
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
          title: action.title,
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
