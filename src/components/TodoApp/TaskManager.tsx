import { Task } from '.';
type TaskEditorProps = {
  task: Task;
};

/**
 * 필요 기능
 * - 엔터 이벤트에 새로운 Task 생성
 * - 마운트 시 input focus
 */
export const TaskAdder: React.FC = () => {
  return <input className='new-todo' placeholder='What needs to be done?' />;
};

/**
 * 필요 기능
 * - 엔터로 저장 (입력 시 저장 x)
 */
export const TaskEditor: React.FC<TaskEditorProps> = ({ task }) => {
  return (
    <div className='input-container'>
      <input type='text' className='new-todo' defaultValue={task.title} />
    </div>
  );
};
