import { Task } from '.';
import TaskItem from './TaskItem';

type TaskListProps = {
  tasks: Task[];
};

/**
 * 필요 기능
 * - 전체 토글
 */
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  if (tasks.length <= 0) {
    return null;
  }

  return (
    <section className='main'>
      <div className='toggle-all-container'>
        <input type='checkbox' className='toggle-all' id='toggle-all' />
        <label className='toggle-all-label' htmlFor='toggle-all'>
          Mark all as complete
        </label>
      </div>
      <ul className='todo-list'>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
