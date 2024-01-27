export default function TaskList({ tasks }) {
  return (
    <ul id="task-list" className="task-list">
      {tasks.map((task, index) => (
        <li key={task.id}>
          <Task task={task} editMode={index === 1} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, editMode = false }) {
  return (
    <>
      <input type="checkbox" checked={task.done} />
      {editMode ? (
        <input type="text" className="edit-input" value={task.text} />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="action-box">
        {editMode ? (
          <button className="btn save-btn">save</button>
        ) : (
          <button className="btn edit-btn">edit</button>
        )}
        <button className="btn delete-btn">delete</button>
      </div>
    </>
  );
}
