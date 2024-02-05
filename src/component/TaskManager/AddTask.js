import { useContext, useState } from 'react';
import { TasksDispatchContext } from './hooks/useTasksContext';
import { ADD_TASK, UPDATE_TASK } from './hooks/useTasksReducer';

/**
 * Tasks 등록 컴포넌트
 */
export default function AddTask() {
  const tasksDispatch = useContext(TasksDispatchContext);
  const [text, setText] = useState('');

  function handleAddTask(e) {
    e.preventDefault();

    tasksDispatch({
      type: ADD_TASK,
      text,
    });
    setText('');
  }

  return (
    <form id='task-form' className='task-form' onSubmit={handleAddTask}>
      <input
        type='text'
        className='new-task'
        placeholder='Add task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit' className='btn add-btn' disabled={text === ''}>
        Add
      </button>
      <button
        type='button'
        className='btn add-btn'
        onClick={() => {
          tasksDispatch({
            type: UPDATE_TASK,
            task: {
              id: 1,
              text,
              done: false,
            },
          });
          setText('');
        }}
      >
        [1] 업데이트
      </button>
    </form>
  );
}
