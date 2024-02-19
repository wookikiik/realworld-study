import TaskAdder from './TaskAdder';

const TodoAppHeader = () => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <TaskAdder />
    </header>
  );
};

export default TodoAppHeader;
