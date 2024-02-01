import { TasksProvider } from "../hooks/useTasks";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function Task({ title }) {
  return (
    <TasksProvider>
      <h1>{title}</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
