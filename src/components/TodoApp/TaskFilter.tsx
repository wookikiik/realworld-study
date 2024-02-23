import { TaskStatus } from '../../types/task';
import useTasksStore from './hooks/useTasksStore';

const TaskFilter = () => {
  const statuses: TaskStatus[] = ['', 'Active', 'Completed'];

  return (
    <ul className='filters'>
      {statuses.map((status) => (
        <li key={status}>
          <FilterButton status={status} />
        </li>
      ))}
    </ul>
  );
};

const FilterButton = ({ status = '' }: { status: TaskStatus }) => {
  const { statusFilter, applyStatusFilter } = useTasksStore();

  const isActiveFilter = (status: string) => {
    return statusFilter === status ? 'selected' : '';
  };

  function handleFilterChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    applyStatusFilter(status);
  }

  return (
    <a
      className={isActiveFilter(status)}
      href='#/'
      onClick={handleFilterChange}
    >
      {status || 'All'}
    </a>
  );
};

export default TaskFilter;
