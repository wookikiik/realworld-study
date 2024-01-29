import { useState } from 'react';
import { TASKS_ACTIONS } from '../hooks/useTasks';

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
      type: TASKS_ACTIONS.DONE_TASK,
      task: {
        ...task,
        done: e.target.checked,
      },
    });
  }

  function handleChangeTask(e) {
    dispatch({
      type: TASKS_ACTIONS.UPDATE_TASK,
      task: {
        ...task,
        text: e.target.value,
      },
    });
  }

  function handleDeleteTask() {
    dispatch({
      type: TASKS_ACTIONS.DELETE_TASK,
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
