import { useState } from 'react';

import TaskEditor from './TaskEditor';
import { TaskItemProps } from '../../types/task';

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onUpdateTask,
  onDeleteTask,
  onToggleTask,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }
  function handleToggleTask() {
    onToggleTask(task.id);
  }
  function handleToggleEditMode() {
    setIsEditMode((e) => !e);
  }

  return (
    <li
      className={task.completed ? 'completed' : ''}
      onDoubleClick={handleToggleEditMode}
    >
      <div className='view'>
        {isEditMode ? (
          <TaskEditor
            task={task}
            onUpdateTask={onUpdateTask}
            onEndEditMode={() => setIsEditMode(false)}
          />
        ) : (
          <>
            <input
              type='checkbox'
              className='toggle'
              checked={task.completed}
              onChange={handleToggleTask}
            />
            <label>{task.title}</label>
            <button className='destroy' onClick={handleDeleteTask} />
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
