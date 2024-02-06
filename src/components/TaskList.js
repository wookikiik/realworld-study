import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul data-testid="task-list" className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
