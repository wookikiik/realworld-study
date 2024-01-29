import { useState } from 'react';

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
  onDoneTask,
}) {
  return (
    <ul id='task-list' className='task-list'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
          onDoneTask={onDoneTask}
        />
      ))}
    </ul>
  );
}

export function Task({ task, onChangeTask, onDeleteTask, onDoneTask }) {
  const [mode, setMode] = useState('view');
  const isEditMode = mode === 'edit';

  function handleDoneTask(e) {
    onDoneTask({
      ...task,
      done: e.target.checked,
    });
  }

  function handleChangeTask(e) {
    onChangeTask({
      ...task,
      text: e.target.value,
    });
  }
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <li>
      <input type='checkbox' checked={task.done} onChange={handleDoneTask} />
      {isEditMode ? (
        <input
          type='text'
          className='edit-input'
          value={task.text}
          onChange={handleChangeTask}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className='action-box'>
        {isEditMode ? (
          <button className='btn save-btn' onClick={() => setMode('view')}>
            save
          </button>
        ) : (
          <button className='btn edit-btn' onClick={() => setMode('edit')}>
            edit
          </button>
        )}
        <button className='btn delete-btn' onClick={handleDeleteTask}>
          delete
        </button>
      </div>
    </li>
  );
}
