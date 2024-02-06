import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TaskProvider } from "../hooks/useTasks";

export default function TodoApp({ title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <TaskProvider initialTasks={initialTasks}>
        <AddTask />
        <TaskList />
      </TaskProvider>
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
