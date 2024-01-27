import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

const initialTasks = [
  { id: 0, text: "카프카 박물관 방문하기", done: true },
  { id: 1, text: "인형극 보기", done: false },
];

export default function Task({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <AddTask text="레논 벽 사진" />
      <TaskList tasks={initialTasks} />
    </>
  );
}
