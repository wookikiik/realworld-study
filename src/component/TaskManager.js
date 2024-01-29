import AddTask from './AddTask';
import TaskList from './TaskList';

export default function TaskManager() {
  return (
    <div className='container'>
      <h1>프라하에서 해야 할 일</h1>
      <AddTask />
      <TaskList tasks={initialTasks} />
    </div>
  );
}

const initialTasks = [
  { id: 0, name: '카프카 박물관 방문하기', done: true },
  { id: 1, name: '인형극 보기', done: false },
];
