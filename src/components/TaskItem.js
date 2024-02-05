import { useState } from "react";

export default function TaskItem({ task }) {
  // isEditMode
  const [isEdit, setIsEdit] = useState(true);

  return (
    <li>
      <input type="checkbox" defaultChecked={task.completed} />
      {isEdit ? (
        <input type="text" className="edit-input" defaultValue={task.title} />
      ) : (
        <span>{task.title}</span>
      )}

      <div className="action-box">
        {isEdit ? (
          <button className="btn save-btn">save</button>
        ) : (
          <button className="btn edit-btn">edit</button>
        )}

        <button className="btn delete-btn">delete</button>
      </div>
    </li>
  );
}
