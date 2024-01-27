import useTask from "../hooks/useTask.js";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

const initialTasks = [
  { id: 0, text: "카프카 박물관 방문하기", done: true },
  { id: 1, text: "인형극 보기", done: false },
];

export default function Task({ title }) {
  const { tasks, addTask, deleteTask, updateTask } = useTask(initialTasks);
  return (
    <>
      <h1>{title}</h1>
      <AddTask onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </>
  );
}
