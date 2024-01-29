import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from '../hooks/useTasks';

export default function TaskManager() {
  return (
    <div className='container'>
      <h1>프라하에서 해야 할 일</h1>
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
