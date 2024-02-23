import { useEffect, useRef } from 'react';
import { TaskEditorProps } from '../../types/task';
import useTasksStore from './hooks/useTasksStore';

/**
 * 필요 기능
 * - 마운트 시 input focus
 */
const TaskEditor = ({ task, onEndEditMode }: TaskEditorProps) => {
  const { updateTask } = useTasksStore();
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      onEndEditMode();
      return;
    }
  }

  function handleSubmit() {
    updateTask({
      taskId: task.id,
      title: titleRef.current?.value || '',
    });
    onEndEditMode();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={titleRef}
        type='text'
        className='edit'
        defaultValue={task.title}
        onKeyDown={handleKeyPress}
        onBlur={onEndEditMode}
      />
    </form>
  );
};

export default TaskEditor;
