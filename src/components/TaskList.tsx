import React from "react";

const TaskList: React.FC = () => {
  return (
    <ul className="todo-list">
      <TaskItem task={{ title: "Taste JavaScript", done: false }} />
      <TaskItem task={{ title: "Buy a unicorn", done: true }} />
    </ul>
  );
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const statusStyle = task.done ? "completed" : "";
  return (
    <li className={statusStyle}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={task.done} />
        <label>{task.title}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" defaultValue={task.title} />
    </li>
  );
};

export default TaskList;

type Task = {
  done: boolean;
  title: string;
};

type TaskItemProps = {
  task: Task;
};
