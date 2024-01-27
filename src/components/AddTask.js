export default function AddTask({ text }) {
  return (
    <form id="task-form" className="task-form">
      <input
        type="text"
        id="new-task"
        className="new-task"
        placeholder="Add task"
        value={text}
      />
      <button type="submit" className="btn add-btn">
        Add
      </button>
    </form>
  );
}
