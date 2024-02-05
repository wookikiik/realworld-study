import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TodoApp({ title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}
