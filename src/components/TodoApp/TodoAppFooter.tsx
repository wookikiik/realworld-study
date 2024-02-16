import { Task } from '.';

type FooterProps = {
  tasks: Task[];
};

/**
 * 필요 기능
 * - 완료 항목 삭제 버튼 기능
 */
const TodoAppFooter: React.FC<FooterProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return null;
  }

  const activeTasks: Task[] = tasks.filter((task) => !task.completed);
  const completedTasks: Task[] = tasks.filter((task) => task.completed);

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeTasks.length}</strong> item left!
      </span>

      <TaskFilter />

      {completedTasks && (
        <button className='clear-completed'>Clear completed</button>
      )}
    </footer>
  );
};

/**
 * 필요 기능
 * - 필터 or routing?
 */
const TaskFilter: React.FC = () => {
  // Remove this if you don't implement routing
  return (
    <ul className='filters'>
      <li>
        <a className='selected' href='#/'>
          All
        </a>
      </li>
      <li>
        <a href='#/active'>Active</a>
      </li>
      <li>
        <a href='#/completed'>Completed</a>
      </li>
    </ul>
  );
};

export default TodoAppFooter;
