import AddTask from './AddTask';
import TaskList from './TaskList';
import { useTasks } from '../hooks/useTasks';

export default function TaskManager() {
  const [tasks, dispatch] = useTasks();

  return (
    <div className='container'>
      <h1>프라하에서 해야 할 일</h1>
      <AddTask dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}
