import React from "react";
import { useFilterTasks, useTasksActions, useTasksState } from "../hooks";

const ToggleComplete: React.FC = () => {
  const { tasks } = useTasksState();
  const filterTasks = useFilterTasks(tasks);

  const { toggleComplete } = useTasksActions();

  if (filterTasks.length === 0) {
    return null;
  }

  const allCompleted = filterTasks.every((task) => task.complete);

  return (
    <>
      <input
        id="toggle-all"
        data-testid="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={toggleComplete}
      />
      <label htmlFor="toggle-all" data-testid="checkbox-label">
        Mark all as complete
      </label>
    </>
  );
};

export default ToggleComplete;
