import { useContext, useState } from 'react';
import { TasksDispatchContext } from './hooks/useTasksContext';
import { DELETE_TASK, DONE_TASK, UPDATE_TASK } from './hooks/useTasksReducer';

/**
 * Task 관리[U|D] 컴포넌트
 * @param {{ id: number, text: string, done: boolean } || null} task
 */
export default function Task({ task }) {
  const tasksDispatch = useContext(TasksDispatchContext);

  const [text, setText] = useState(); // useState(task.text) props 미러링 금지?
  const [isEditMode, setIsEditMode] = useState(false);

  /**
   * Task 상태 변경
   */
  function handleDoneTask(e) {
    tasksDispatch({
      type: DONE_TASK,
      task: {
        ...task,
        done: e.target.checked,
      },
    });
  }

  /**
   * Task 수정 적용
   */
  function handleChangeTask(e) {
    tasksDispatch({
      type: UPDATE_TASK,
      task: {
        ...task,
        text,
      },
    });
    setIsEditMode(false);
  }

  /**
   * Task 삭제
   */
  function handleDeleteTask() {
    tasksDispatch({
      type: DELETE_TASK,
      id: task.id,
    });
  }

  function handleToggleEditMode() {
    setText(task.text);
    setIsEditMode((m) => !m);
  }

  if (!task) {
    return null;
  }

  return (
    <>
      <input type='checkbox' checked={task.done} onChange={handleDoneTask} />
      {isEditMode ? (
        <input
          type='text'
          className='edit-input'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className='action-box'>
        {isEditMode ? (
          <>
            <button className='btn save-btn' onClick={handleChangeTask}>
              save
            </button>
            <button className='btn delete-btn' onClick={handleToggleEditMode}>
              cancel
            </button>
          </>
        ) : (
          <>
            <button className='btn edit-btn' onClick={handleToggleEditMode}>
              edit
            </button>
            <button className='btn delete-btn' onClick={handleDeleteTask}>
              delete
            </button>
          </>
        )}
      </div>
    </>
  );
}
