import { Task } from '../../types/task';

export const DUMMY_TASK_LIST: Task[] = [
  { id: 0, title: 'TodoMVC 시작하기', completed: true },
  { id: 1, title: '컴포넌트 구조 및 기능 설계', completed: true },
  { id: 2, title: '정적 버전 빌드', completed: true },
  { id: 3, title: 'State 적용', completed: true },
  {
    id: 4,
    title: 'Hook with Reducer, Context',
    completed: false,
  },
  {
    id: 5,
    title: 'Ref, Effect 적용',
    completed: false,
  },
];

export default DUMMY_TASK_LIST;
