import DUMMY_TASK_LIST from '../../../data/dummy/todo';
import { useTaskReducer } from './useTaskReducer';
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

export const TasksContext =
  createContext<TaskContextData>(INITIAL_TASK_CONTEXT);

function useTask() {
  const { tasks, actions } = useContext<TaskContextData>(TasksContext);

  return {
    tasks,
    ...actions,
  };
}

export const TasksFilterContext = createContext<TasksFilter>({
  statusFilter: '',
  setStatusFilter: () => {},
});
function useTasksFilter() {
  const { statusFilter, setStatusFilter } =
    useContext<TasksFilter>(TasksFilterContext);

  return {
    statusFilter,
    setStatusFilter,
  };
}

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

export { useTask, useTasksFilter, TasksProvider };
