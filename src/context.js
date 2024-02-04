import { createContext, useReducer } from 'react';
import { taskReducer } from './reducers';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
    const initialTasks = [
      {
        id: 1,
        title: 'Explore Prague Castle',
      },
      {
        id: 2,
        title: 'Stroll Across Charles Bridge',
      }
    ];
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  
    return (
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    );
  }

