import { createContext } from "react";
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
