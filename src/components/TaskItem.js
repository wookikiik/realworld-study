export default function TaskItem({ title, completed }) {
  return (
    <li>
      <input type="checkbox" defaultChecked={completed} />
      <span>{title}</span>
      <div className="action-box">
        <button className="btn edit-btn">edit</button>
        <button className="btn delete-btn">delete</button>
      </div>
    </li>
  );
}
