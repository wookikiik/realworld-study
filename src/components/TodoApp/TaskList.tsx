import { TaskListProps } from '../../types/task';
import TaskItem from './TaskItem';

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onUpdateTask,
  onDeleteTask,
  onToggleTask,
  onToggleAllTask,
}) => {
  if (tasks.length <= 0) {
    return null;
  }

  /**
   * TODO: 개별 체크 확인하여 전체 체크박스 상태 관리
   */
  function handleToggleAllTask(e: React.ChangeEvent<HTMLInputElement>) {
    onToggleAllTask(e.target.checked);
  }

  return (
    <section className='main'>
      <div className='toggle-all-container'>
        <input
          type='checkbox'
          className='toggle-all'
          id='toggle-all'
          defaultChecked={false}
          onChange={handleToggleAllTask}
        />
        <label className='toggle-all-label' htmlFor='toggle-all'>
          Mark all as complete
        </label>
      </div>
      <ul className='todo-list'>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
