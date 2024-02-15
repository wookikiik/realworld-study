import React from "react";
import { Task } from "@/types";

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const statusStyle = task.complete ? "completed" : "";
  return (
    <li className={statusStyle}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={task.complete}
        />
        <label>{task.title}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" defaultValue={task.title} />
    </li>
  );
};

export default TaskList;

type TaskListProps = {
  tasks: Task[];
};

type TaskItemProps = {
  task: Task;
};
