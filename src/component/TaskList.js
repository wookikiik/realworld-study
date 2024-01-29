import { useState } from 'react';

export default function TaskList({ tasks, dispatch }) {
  return (
    <ul id='task-list' className='task-list'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export function Task({ task, dispatch }) {
  const [mode, setMode] = useState('view');
  const isEditMode = mode === 'edit';

  function handleDoneTask(e) {
    dispatch({
      type: 'done_task',
      task: {
        ...task,
        done: e.target.checked,
      },
    });
  }

  function handleChangeTask(e) {
    dispatch({
      type: 'update_task',
      task: {
        ...task,
        text: e.target.value,
      },
    });
  }

  function handleDeleteTask() {
    dispatch({
      type: 'delete_task',
      id: task.id,
    });
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
