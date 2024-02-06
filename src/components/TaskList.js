import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

export default function TaskList() {
  const { tasks } = useTasks();
  return (
    <ul data-testid="task-list" className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
