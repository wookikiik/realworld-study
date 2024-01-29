export default function TaskList({ tasks }) {
  return (
    <ul id='task-list' className='task-list'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          mode={task.is % 2 === 0 ? 'edit' : 'view'} // TODO : to be deleted
          task={task}
        />
      ))}
    </ul>
  );
}

export function Task({ mode, task }) {
  const isEditMode = mode === 'edit';

  return (
    <li>
      <input type='checkbox' checked={task.done} />
      {isEditMode ? (
        <input type='text' className='edit-input' value={task.name} />
      ) : (
        <span>{task.name}</span>
      )}
      <div className='action-box'>
        {isEditMode ? (
          <button className='btn save-btn'>save</button>
        ) : (
          <button className='btn edit-btn'>edit</button>
        )}
        <button className='btn delete-btn'>delete</button>
      </div>
    </li>
  );
}
