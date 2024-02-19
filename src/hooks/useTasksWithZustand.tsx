import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { Task } from "@types";

const TasksStateContext = createContext<Store>({ tasks: [] });
const TasksActionContext = createContext<Action>({
  addTask: (title: string) => {},
  updateTask: (task: Task) => {},
  deleteTask: (taskId: string) => {},
  toggleComplete: () => {},
  clearCompleted: () => {},
});

const generateId = () => uuidv4();
const useStore = create<Store & Action>()((set) => ({
  tasks: [],
  addTask: (title: string) =>
    set(({ tasks }) => ({
      tasks: [...tasks, { id: generateId(), title, complete: false }],
    })),
  updateTask: (task: Task) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
    })),
  deleteTask: (taskId: string) =>
    set(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== taskId),
    })),
  toggleComplete: () =>
    set(({ tasks }) => {
      const isAllComplated = tasks.every((task) => task.complete);
      const complete = !isAllComplated;
      return {
        tasks: tasks.map((task) => ({ ...task, complete })),
      };
    }),
  clearCompleted: () =>
    set(({ tasks }) => ({
      tasks: tasks.filter((task) => !task.complete),
    })),
}));

export function TasksProvider({ children }: TasksProviderProps) {
  const { tasks, ...actions } = useStore();

  return (
    <TasksStateContext.Provider value={{ tasks }}>
      <TasksActionContext.Provider value={actions}>
        {children}
      </TasksActionContext.Provider>
    </TasksStateContext.Provider>
  );
}

export function useTasksState() {
  const context = useContext(TasksStateContext);
  if (context === undefined) {
    throw new Error("useTasksState must be used within a TasksProvider");
  }
  return context;
}

export function useTasksActions() {
  const context = useContext(TasksActionContext);
  if (context === undefined) {
    throw new Error("useTasksDispatch must be used within a TasksProvider");
  }
  return context;
}

interface TasksProviderProps {
  children: React.ReactNode;
}

type Store = {
  tasks: Task[];
};

type Action = {
  addTask: (title: string) => void;
  updateTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  toggleComplete: () => void;
  clearCompleted: () => void;
};
