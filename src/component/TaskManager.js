import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useTaskReducer } from '../hooks/useTaskReducer';

export default function TaskManager() {
  const [tasks, dispatch] = useReducer(useTaskReducer, initialTasks);

  return (
    <div className='container'>
      <h1>프라하에서 해야 할 일</h1>
      <AddTask dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

const initialTasks = [
  { id: 0, text: '카프카 박물관 방문하기', done: true },
  { id: 1, text: '인형극 보기', done: false },
];
