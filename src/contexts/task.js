import { createContext, useContext } from "react";
import useTask from "../hooks/useTask.js";
export const TasksContext = createContext([]);
export const TasksActionsContext = createContext({
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

const initialTasks = [
  { id: 0, text: "카프카 박물관 방문하기", done: true },
  { id: 1, text: "인형극 보기", done: false },
];

export function TasksProvider({ children }) {
  const { tasks, actions } = useTask(initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksActionsContext.Provider value={actions}>
        {children}
      </TasksActionsContext.Provider>
    </TasksContext.Provider>
  );
}

export function useActions() {
  const actions = useContext(TasksActionsContext);
  if (!actions) {
    throw new Error("Cannot find TasksProvider");
  }
  return actions;
}

export function useTasks() {
  const tasks = useContext(TasksContext);
  if (!tasks) {
    throw new Error("Cannot find TasksProvider");
  }
  return tasks;
}
