import { useEffect, useRef } from 'react';
import { TaskEditorProps } from '../../types/task';
import { useTask } from './hooks/useTasksContext';

/**
 * 필요 기능
 * - 마운트 시 input focus
 */
const TaskEditor = ({ task, onEndEditMode }: TaskEditorProps) => {
  const { updateTask } = useTask();
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      onEndEditMode();
      return;
    }

    if (e.key === 'Enter') {
      const inputElement = e.target as HTMLInputElement;

      updateTask({
        id: task.id,
        title: inputElement.value,
      });
      onEndEditMode();
    }
  }

  return (
    <div className='input-container'>
      <input
        ref={titleRef}
        type='text'
        className='new-todo'
        defaultValue={task.title}
        onKeyDown={handleKeyPress}
        onBlur={onEndEditMode}
      />
    </div>
  );
};

export default TaskEditor;
