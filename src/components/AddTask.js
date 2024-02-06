import { useState } from "react";
export default function AddTask({ onAdd }) {
  const [newTask, setNewTask] = useState("");
  return (
    <form data-testid="task-add-form" className="task-form">
      <input
        type="text"
        data-testid="new-task"
        className="new-task"
        placeholder="Add task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        className="btn add-btn"
        onClick={(e) => {
          e.preventDefault();
          onAdd(newTask);
        }}
      >
        Add
      </button>
    </form>
  );
}
