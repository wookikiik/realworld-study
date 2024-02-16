import React from "react";
import { Task } from "@/types";

const TaskCount: React.FC<TaskCountProps> = ({ tasks }) => {
  const activeTasks = tasks.filter(({ complete }) => !complete).length;
  return (
    <span className="todo-count">
      <strong>{activeTasks}</strong> item left
    </span>
  );
};

export default TaskCount;

type TaskCountProps = {
  tasks: Task[];
};

TaskCount.defaultProps = {
  tasks: [],
};
