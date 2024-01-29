import { useState } from 'react';

export default function AddTask({ dispatch }) {
  const [text, setText] = useState('');

  function handleAddTask(e) {
    e.preventDefault();

    dispatch({
      type: 'add_task',
      text,
    });
  }

  return (
    <form id='task-form' className='task-form' onSubmit={handleAddTask}>
      <input
        type='text'
        id='new-task'
        className='new-task'
        placeholder='Add task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit' className='btn add-btn'>
        Add
      </button>
    </form>
  );
}
