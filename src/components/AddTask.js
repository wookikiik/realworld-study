import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

export default function AddTask() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");

  return (
    <form data-testid="task-add-form" className="task-form">
      <input
        type="text"
        data-testid="new-task"
        className="new-task"
        placeholder="Add task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="btn add-btn"
        onClick={(e) => {
          e.preventDefault();
          addTask(title);
        }}
      >
        Add
      </button>
    </form>
  );
}
