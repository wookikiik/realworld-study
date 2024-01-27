import { TasksProvider } from "../contexts/task.js";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

export default function Task({ title }) {
  return (
    <TasksProvider>
      <h1>{title}</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
