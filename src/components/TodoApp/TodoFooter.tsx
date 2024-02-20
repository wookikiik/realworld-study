import { Task } from '../../types/task';
import TaskFilter from './TaskFilter';
import useTasksStore from './hooks/useTasksStore';

const TodoFooter = () => {
  const { tasks, clearTasks } = useTasksStore();

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
        {activeTasks.length > 0 ? (
          <>
            <strong>{activeTasks.length}</strong> item left!
          </>
        ) : (
          <>All Completed!</>
        )}
      </span>

      <TaskFilter />

      {completedTasks.length > 0 && (
        <button className='clear-completed' onClick={handleClearTask}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default TodoFooter;
