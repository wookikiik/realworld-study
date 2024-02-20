import '../../../node_modules/todomvc-common/base.css';
import '../../../node_modules/todomvc-app-css/index.css';

import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TaskList from './TaskList';
import useTasksLoader from './hooks/useTasksLoader';

const TodoApp = () => {
  useTasksLoader();

  return (
    <>
      <section className='todoapp'>
        <TodoHeader />
        <TaskList />
        <TodoFooter />
      </section>

      <footer className='info'>
        <p>Double-click to edit a todo</p>
      </footer>
    </>
  );
};

export default TodoApp;
