import DUMMY_TASK_LIST from '../../../data/dummy/todo';
import { useTaskReducer } from './useTasksReducer';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { TaskContextData, Task, TasksFilter } from '../../../types/task';

const initialTaskList: Task[] = DUMMY_TASK_LIST;
const INITIAL_TASK_CONTEXT = {
  tasks: [],
  actions: {
    addTask: () => {},
    updateTask: () => {},
    deleteTask: () => {},
    toggleAllTask: () => {},
    toggleTask: () => {},
    clearTasks: () => {},
  },
};

/**
 * @deprecated
 */
export const TasksContext =
  createContext<TaskContextData>(INITIAL_TASK_CONTEXT);

/**
 * @deprecated
 */
function useTasks() {
  const { tasks, actions } = useContext<TaskContextData>(TasksContext);

  return {
    tasks,
    ...actions,
  };
}

/**
 * @deprecated
 */
export const TasksFilterContext = createContext<TasksFilter>({
  statusFilter: '',
  setStatusFilter: () => {},
});
/**
 * @deprecated
 */
function useTasksFilter() {
  const { statusFilter, setStatusFilter } =
    useContext<TasksFilter>(TasksFilterContext);

  return {
    statusFilter,
    setStatusFilter,
  };
}

/**
 * @deprecated
 */
const TasksProvider = ({ children }: PropsWithChildren) => {
  const { tasks, actions } = useTaskReducer(initialTaskList);
  const [statusFilter, setStatusFilter] = useState('');

  return (
    <TasksContext.Provider value={{ tasks, actions }}>
      <TasksFilterContext.Provider value={{ statusFilter, setStatusFilter }}>
        {children}
      </TasksFilterContext.Provider>
    </TasksContext.Provider>
  );
};

export { useTasks, useTasksFilter, TasksProvider };
