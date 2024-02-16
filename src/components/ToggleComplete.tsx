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
        data-testid="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allTasksCompleted}
        onChange={onToggle}
      />
      <label htmlFor="toggle-all" data-testid="checkbox-label">
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
