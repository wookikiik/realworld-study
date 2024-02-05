import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  return (
    <ul data-testid="task-list" className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
