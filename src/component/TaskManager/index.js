import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksManagerProvider } from './hooks/useTasksContext';

/**
 * Tasks 관리 컴포넌트
 * @returns
 */
export default function TaskManager() {
  return (
    <div className='container'>
      <h1>프라하에서 해야 할 일</h1>

      <TasksManagerProvider>
        <AddTask />
        <TaskList />
      </TasksManagerProvider>
    </div>
  );
}
