import { useState } from "react";

export default function TaskList({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <ul id="task-list" className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        </li>
      ))}
    </ul>
  );
}

export function Task({ task, onDeleteTask, onUpdateTask }) {
  const [editMode, setEditMode] = useState(false);

  function handleUpdateTask(e) {
    const text = e.target.value;
    onUpdateTask({ ...task, text });
  }

  function handleDoneTask(e) {
    onUpdateTask({ ...task, done: e.target.checked });
  }

  return (
    <>
      <input type="checkbox" checked={task.done} onChange={handleDoneTask} />
      {editMode ? (
        <input
          type="text"
          className="edit-input"
          value={task.text}
          onChange={handleUpdateTask}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="action-box">
        {editMode ? (
          <button
            className="btn save-btn"
            data-testid="save-button"
            onClick={() => setEditMode(false)}
          >
            save
          </button>
        ) : (
          <button
            className="btn edit-btn"
            data-testid="edit-button"
            onClick={() => setEditMode(true)}
          >
            edit
          </button>
        )}
        <button
          className="btn delete-btn"
          data-testid="delete-button"
          onClick={() => onDeleteTask(task.id)}
        >
          delete
        </button>
      </div>
    </>
  );
}
