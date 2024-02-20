import TaskAdder from './TaskAdder';

const TodoHeader = () => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <TaskAdder />
    </header>
  );
};

export default TodoHeader;
