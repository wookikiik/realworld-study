import { TaskAdder } from './TaskManager';

const TodoAppHeader: React.FC = (props) => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <TaskAdder {...props} />
    </header>
  );
};

export default TodoAppHeader;
