import '../../../node_modules/todomvc-common/base.css';
import '../../../node_modules/todomvc-app-css/index.css';

import TodoAppHeader from './TodoAppHeader';
import TodoAppFooter from './TodoAppFooter';
import TaskList from './TaskList';
import { TasksProvider } from './hooks/useTasksContext';

const TodoApp = () => {
  return (
    <TasksProvider>
      <section className='todoapp'>
        <TodoAppHeader />
        <TaskList />
        <TodoAppFooter />
      </section>

      <footer className='info'>
        <p>Double-click to edit a todo</p>
      </footer>
    </TasksProvider>
  );
};

export default TodoApp;
