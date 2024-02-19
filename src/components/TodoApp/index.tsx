import '../../../node_modules/todomvc-common/base.css';
import '../../../node_modules/todomvc-app-css/index.css';

import TodoAppHeader from './TodoAppHeader';
import TodoAppFooter from './TodoAppFooter';
import TaskList from './TaskList';
import { useTasks } from './hooks/useTasks';

const TodoApp: React.FC = () => {
  const {
    tasks,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
    handleToggleAllTask,
    handleToggleTask,
    handleClearTasks,
  } = useTasks();

  return (
    <>
      <section className='todoapp'>
        <TodoAppHeader onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
          onToggleAllTask={handleToggleAllTask}
        />
        <TodoAppFooter tasks={tasks} onClearTasks={handleClearTasks} />
      </section>

      <footer className='info'>
        <p>Double-click to edit a todo</p>
      </footer>
    </>
  );
};

export default TodoApp;
