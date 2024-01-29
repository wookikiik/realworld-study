import { useContext, useState } from 'react';
import { TASKS_ACTIONS, TasksDispatchContext } from '../hooks/useTasks';

export default function AddTask() {
  const tasksDispatch = useContext(TasksDispatchContext);
  const [text, setText] = useState('');

  function handleAddTask(e) {
    e.preventDefault();

    tasksDispatch({
      type: TASKS_ACTIONS.ADD_TASK,
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
