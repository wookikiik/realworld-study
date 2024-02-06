import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

export default function TaskItem({ task }) {
  // isEditMode
  const [isEdit, setIsEdit] = useState(false);

  const { updateTask, deleteTask } = useTasks();
  function handleEditMode(isEditMode) {
    setIsEdit(isEditMode);
  }

  function handleUpdateTitle(e) {
    updateTask({
      ...task,
      title: e.target.value,
    });
  }

  function handleToggleCompleted() {
    updateTask({
      ...task,
      completed: !task.completed,
    });
  }

  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={task.completed}
        onChange={handleToggleCompleted}
      />

      {isEdit ? (
        <input
          type="text"
          className="edit-input"
          defaultValue={task.title}
          onChange={handleUpdateTitle}
        />
      ) : (
        <span>{task.title}</span>
      )}

      <div className="action-box">
        {isEdit ? (
          <button
            className="btn save-btn"
            onClick={() => handleEditMode(false)}
          >
            save
          </button>
        ) : (
          <button className="btn edit-btn" onClick={() => handleEditMode(true)}>
            edit
          </button>
        )}

        <button className="btn delete-btn" onClick={() => deleteTask(task.id)}>
          delete
        </button>
      </div>
    </li>
  );
}
