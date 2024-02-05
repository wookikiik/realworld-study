export default function AddTask() {
  return (
    <form data-testid="task-add-form" className="task-form">
      <input
        type="text"
        data-testid="new-task"
        className="new-task"
        placeholder="Add task"
      />
      <button type="submit" className="btn add-btn">
        Add
      </button>
    </form>
  );
}
