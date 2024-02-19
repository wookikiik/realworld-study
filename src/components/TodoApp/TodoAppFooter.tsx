import { Task } from '../../types/task';
import TaskFilter from './TaskFilter';
import { useTask } from './hooks/useTasksContext';

const TodoAppFooter = () => {
  const { tasks, clearTasks } = useTask();

  if (tasks.length === 0) {
    return null;
  }

  const activeTasks: Task[] = tasks.filter((task) => !task.completed);
  const completedTasks: Task[] = tasks.filter((task) => task.completed);

  function handleClearTask() {
    if (completedTasks.length > 0) {
      clearTasks();
    }
  }

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeTasks.length}</strong> item left!
      </span>

      <TaskFilter />

      {completedTasks && (
        <button className='clear-completed' onClick={handleClearTask}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default TodoAppFooter;
