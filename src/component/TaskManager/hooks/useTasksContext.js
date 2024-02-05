import { createContext } from 'react';
import { useTasksReducer } from './useTasksReducer';

export const TasksContext = createContext([]);
export const TasksDispatchContext = createContext(() => {});

export function TasksManagerProvider({ children }) {
  const [tasks, dispatch] = useTasksReducer();

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
