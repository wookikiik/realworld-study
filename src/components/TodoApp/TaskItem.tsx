import { useState } from 'react';
import TaskEditor from './TaskEditor';
import { TaskItemProps } from '../../types/task';
import useTasksStore from './hooks/useTasksStore';

const TaskItem = ({ task }: TaskItemProps) => {
  const { deleteTask, toggleTask } = useTasksStore();
  const [isEditMode, setIsEditMode] = useState(false);

  let classes: string[] = [];
  task.completed && classes.push('completed');
  isEditMode && classes.push('editing');

  function handleDeleteTask() {
    deleteTask(task.id);
  }
  function handleToggleTask() {
    toggleTask(task.id);
  }
  function handleToggleEditMode() {
    setIsEditMode((e) => !e);
  }

  return (
    <li className={classes.join(' ')} onDoubleClick={handleToggleEditMode}>
      {isEditMode ? (
        <TaskEditor task={task} onEndEditMode={() => setIsEditMode(false)} />
      ) : (
        <div className='view'>
          <input
            type='checkbox'
            className='toggle'
            checked={task.completed}
            onChange={handleToggleTask}
          />
          <label>{task.title}</label>
          <button className='destroy' onClick={handleDeleteTask} />
        </div>
      )}
    </li>
  );
};

export default TaskItem;
