import { useEffect } from 'react';
import useTasksStore from './useTasksStore';
import { Task } from '../../../types/task';

const TASK_LOCAL_STORAGE_ID = 'tasks';

/**
 * TODO: API를 통한 목록 가져오기로 변경, localStorage 삭제
 */
const useTasksLoader = () => {
  const { tasks, loadTask } = useTasksStore();

  useEffect(() => {
    const initialTaskList: Task[] = JSON.parse(
      localStorage.getItem(TASK_LOCAL_STORAGE_ID) || '[]'
    ) as Task[];

    initialTaskList.length > 0 && loadTask(initialTaskList);

    return () => {
      localStorage.setItem(TASK_LOCAL_STORAGE_ID, JSON.stringify([]));
    };
  }, [loadTask]);

  useEffect(() => {
    localStorage.setItem(TASK_LOCAL_STORAGE_ID, JSON.stringify(tasks));
  }, [tasks]);
};

export default useTasksLoader;
