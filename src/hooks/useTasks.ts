import { Task } from "@/types";
import { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export function useTasks() {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: [] });

  useEffect(() => {
    // TODO: fetch tasks from Task API Service
  }, []);

  return {
    tasks: state.tasks,
    addTask: (title: string) => {
      dispatch({ type: "ADD_TASK", title });
    },
    updateTask: (task: Task) => {
      dispatch({ type: "UPDATE_TASK", task });
    },
    deleteTask: (taskId: string) => {
      dispatch({ type: "DELETE_TASK", taskId });
    },
    toggleComplete: () => {
      dispatch({ type: "TOGGLE_COMPLETE" });
    },
    clearCompleted: () => {
      dispatch({ type: "CLEAR_COMPLETED" });
    },
  };
}

function tasksReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: generateId(), title: action.title, complete: false },
        ],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.task.id ? { ...task, ...action.task } : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.taskId),
      };
    case "TOGGLE_COMPLETE":
      const isAllComplated = state.tasks.every((task) => task.complete);
      const complete = !isAllComplated;
      return {
        ...state,
        tasks: state.tasks.map((task) => ({ ...task, complete })),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.complete),
      };
    default:
      return state;
  }
}

function generateId() {
  return uuidv4();
}

type TaskState = {
  tasks: Task[];
};

type AddTaskAction = {
  type: "ADD_TASK";
  title: string;
};

type UpdateTaskAction = {
  type: "UPDATE_TASK";
  task: Task;
};

type DeleteTaskAction = {
  type: "DELETE_TASK";
  taskId: string;
};

type ToggleCompleteAction = {
  type: "TOGGLE_COMPLETE";
};

type ClearCompletedAction = {
  type: "CLEAR_COMPLETED";
};

type TaskAction =
  | AddTaskAction
  | UpdateTaskAction
  | DeleteTaskAction
  | ToggleCompleteAction
  | ClearCompletedAction;
