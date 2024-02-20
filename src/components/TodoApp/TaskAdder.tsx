import { useEffect, useRef, useState } from 'react';
import useTasksStore from './hooks/useTasksStore';

/**
 * 필요 기능
 * - 마운트 시 input focus
 */
const TaskAdder = () => {
  const { addTask } = useTasksStore();
  const [title, setTitle] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function handleTitleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      addTask(title);
      setTitle('');
    }
  }

  return (
    <input
      ref={titleRef}
      className='new-todo'
      placeholder='What needs to be done?'
      value={title}
      onChange={handleTitleChange}
      onKeyDown={handleTitleKeyPress}
    />
  );
};

export default TaskAdder;
