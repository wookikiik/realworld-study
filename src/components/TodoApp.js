import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp({ title }) {
  const [tasks, setTasks] = useState(initialTasks);
  function handleAdd(newTitle) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTitle,
        completed: false,
      },
    ]);
  }

  function handleUpdate(editTask) {
    setTasks(tasks.map((task) => (task.id === editTask.id ? editTask : task)));
  }

  function handleDelete(deleteId) {
    setTasks(tasks.filter(({ id }) => id !== deleteId));
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <AddTask onAdd={handleAdd} />
      <TaskList
        tasks={tasks} //
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

const initialTasks = [
  {
    id: "d3ce81c6-809c-4366-90f7-7ebf51a8e7d2",
    title: "카프카 박물관 방문하기",
    completed: false,
  },
  {
    id: "098031d1-3b01-4cdd-a1c1-2f3ff1f67c3e",
    title: "인형극 보기",
    completed: false,
  },
];
