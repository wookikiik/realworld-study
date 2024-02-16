import { Task } from '.';
import { TaskEditor } from './TaskManager';

type TaskItemProps = {
  task: Task;
};

/**
 * 필요기능
 * - 체크박스로 완료 토글
 * - 더블클릭으로 편집모드 토글
 * - x 버튼 클릭 시 삭제
 */
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className='view'>
        {/* View Mode */}
        <input
          type='checkbox'
          className='toggle'
          defaultChecked={task.completed}
        />
        <label>{task.title}</label>
        <button className='destroy' />
        {/* Edit Mode */}
        <TaskEditor task={task} />
      </div>
    </li>
  );
};

export default TaskItem;
