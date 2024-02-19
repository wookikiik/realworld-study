import { TaskEditorProps } from '../../types/task';

/**
 * 필요 기능
 * - 마운트 시 input focus
 */
const TaskEditor: React.FC<TaskEditorProps> = ({
  task,
  onUpdateTask,
  onEndEditMode,
}) => {
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    const inputElement = e.target as HTMLInputElement;
    if (e.key === 'Escape') {
      onEndEditMode();
      return;
    }

    if (e.key === 'Enter') {
      onUpdateTask({
        id: task.id,
        title: inputElement.value,
      });
      onEndEditMode();
    }
  }

  return (
    <div className='input-container'>
      <input
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
