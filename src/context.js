import { createContext, useReducer } from 'react';
import produce from 'immer';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, ["1", "3"]);
  
    return (
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    );
  }

function taskReducer(draft, action) {
    switch (action.type) {
        case 'add': 
          return produce(draft, draftState => {
            draftState.push(action.task)
        });
        case 'edit': 
          return produce(draft, draftState => {
              draftState[action.index] = action.task;         
            });
        case 'delete': 
          return produce(draft, draftState => {
            draftState.splice(action.index, 1);
          });                   
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
