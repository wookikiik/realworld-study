import '../../../node_modules/todomvc-common/base.css';
import '../../../node_modules/todomvc-app-css/index.css';

import DUMMY_TASK_LIST from '../../data/todo';

import TodoAppHeader from './TodoAppHeader';
import TodoAppFooter from './TodoAppFooter';
import TaskList from './TaskList';

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTaskList: Task[] = DUMMY_TASK_LIST;

const TodoApp: React.FC = () => {
  return (
    <>
      <section className='todoapp'>
        <TodoAppHeader />
        <TaskList tasks={initialTaskList} />
        <TodoAppFooter tasks={initialTaskList} />
      </section>

      <footer className='info'>
        <p>Double-click to edit a todo</p>
      </footer>
    </>
  );
};

export default TodoApp;
