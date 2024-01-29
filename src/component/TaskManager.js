import { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function TaskManager() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleDoneTask(task) {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  }

  return (
    <div className='container'>
      <h1>프라하에서 해야 할 일</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        onDoneTask={handleDoneTask}
      />
    </div>
  );
}

const initialTasks = [
  { id: 0, text: '카프카 박물관 방문하기', done: true },
  { id: 1, text: '인형극 보기', done: false },
];
