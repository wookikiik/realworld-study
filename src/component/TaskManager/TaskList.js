import { useContext } from 'react';
import { TasksContext } from './hooks/useTasksContext';
import Task from './Task';

/**
 * Tasks 목록 전시 컴포넌트
 */
export default function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
