import { useTasksFilter } from './hooks/useTasksContext';

const TaskFilter = () => {
  return (
    <ul className='filters'>
      {['', 'Active', 'Completed'].map((status) => (
        <li key={status}>
          <FilterButton status={status} />
        </li>
      ))}
    </ul>
  );
};

const FilterButton = ({ status = '' }: { status: string }) => {
  const { statusFilter, setStatusFilter } = useTasksFilter();

  const isActiveFilter = (status: string) => {
    return statusFilter === status ? 'selected' : '';
  };

  function handleFilterChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setStatusFilter(status);
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
