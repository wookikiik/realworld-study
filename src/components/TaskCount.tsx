import React from "react";
import { Task } from "@/types";

const TaskCount: React.FC<TaskCountProps> = ({ taskList }) => {
  const activeTasks = taskList.filter(({ complete }) => !complete).length;
  return (
    <span className="todo-count">
      <strong>{activeTasks}</strong> item left
    </span>
  );
};

export default TaskCount;

type TaskCountProps = {
  taskList: Task[];
};

TaskCount.defaultProps = {
  taskList: [],
};
