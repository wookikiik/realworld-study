import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(text);
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
