import { useState } from 'react';
import { TaskAdderProps } from '../../types/task';

/**
 * 필요 기능
 * - 마운트 시 input focus
 */
const TaskAdder: React.FC<TaskAdderProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onAddTask(text);
      setText('');
    }
  }

  return (
    <input
      className='new-todo'
      placeholder='What needs to be done?'
      value={text}
      onChange={handleTextChange}
      onKeyDown={handleKeyPress}
    />
  );
};

export default TaskAdder;
