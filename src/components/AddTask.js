import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

export default function AddTask() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText("");
  }

  return (
    <form id="task-form" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-task"
        className="new-task"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn add-btn">
        Add
      </button>
    </form>
  );
}
