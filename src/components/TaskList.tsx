import React from "react";
import { Task } from "@/types";

const TaskList: React.FC = () => {
  return (
    <ul className="todo-list">
      <TaskItem task={{ title: "Taste JavaScript", complete: false }} />
      <TaskItem task={{ title: "Buy a unicorn", complete: true }} />
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

type TaskItemProps = {
  task: Task;
};
