import { TodoAppHeaderProps } from '../../types/task';
import TaskAdder from './TaskAdder';

const TodoAppHeader: React.FC<TodoAppHeaderProps> = (props) => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <TaskAdder {...props} />
    </header>
  );
};

export default TodoAppHeader;
