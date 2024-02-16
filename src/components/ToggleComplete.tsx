import React from "react";
import { Task } from "@/types";

const ToggleComplete: React.FC<ToggleCompleteProps> = ({ tasks, onToggle }) => {
  if (tasks.length === 0) {
    return null;
  }

  const allTasksCompleted = tasks.every((task) => task.complete);

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        defaultChecked={allTasksCompleted}
      />
      <label htmlFor="toggle-all" onClick={onToggle}>
        Mark all as complete
      </label>
    </>
  );
};

type ToggleCompleteProps = {
  tasks: Task[];
  onToggle: () => void;
};

export default ToggleComplete;
