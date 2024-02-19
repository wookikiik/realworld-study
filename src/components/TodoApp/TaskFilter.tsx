import { TaskFilterProps } from '../../types/task';

/**
 * 필요 기능
 * - 필터 or routing?
 */
const TaskFilter: React.FC<TaskFilterProps> = () => {
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

export default TaskFilter;
