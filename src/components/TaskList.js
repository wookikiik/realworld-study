import { useState, useContext } from "react";
import { TasksContext, TasksActionsContext } from "../contexts/task.js";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ul id="task-list" className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

export function Task({ task }) {
  const [editMode, setEditMode] = useState(false);
  const { deleteTask, updateTask } = useContext(TasksActionsContext);
  function handleUpdateTask(e) {
    const text = e.target.value;
    updateTask({ ...task, text });
  }

  function handleDoneTask(e) {
    updateTask({ ...task, done: e.target.checked });
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleDoneTask}
        id={"check_" + task.id}
      />
      {editMode ? (
        <input
          type="text"
          className="edit-input"
          value={task.text}
          onChange={handleUpdateTask}
        />
      ) : (
        <label htmlFor={"check_" + task.id}>
          <span htmlFor={"check_" + task.id}>{task.text}</span>
        </label>
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
          onClick={() => deleteTask(task.id)}
        >
          delete
        </button>
      </div>
    </>
  );
}
