import { Task } from '../../types/task';
import TaskItem from './TaskItem';
import useTasksStore from './hooks/useTasksStore';

function filtering(statusFilter: string, task: Task) {
  if (statusFilter === 'Active') {
    return !task.completed;
  } else if (statusFilter === 'Completed') {
    return task.completed;
  } else {
    return true;
  }
}

const TaskList = () => {
  const { tasks, statusFilter, toggleAllTask } = useTasksStore();

  let visibleTasks: Task[] = tasks.filter((task) =>
    filtering(statusFilter, task)
  );

  function handleToggleAllTask(e: React.ChangeEvent<HTMLInputElement>) {
    toggleAllTask(e.target.checked);
  }

  if (tasks.length <= 0) {
    return null;
  }

  return (
    <section className='main'>
      <div className='toggle-all-container'>
        <input
          type='checkbox'
          className='toggle-all'
          id='toggle-all'
          defaultChecked={false}
          onChange={handleToggleAllTask}
        />
        <label className='toggle-all-label' htmlFor='toggle-all'>
          Mark all as complete
        </label>
      </div>
      <ul className='todo-list'>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
