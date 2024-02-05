import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <ul data-testid="task-list" className="task-list">
      <TaskItem title="카프카 박물관 방문하기" completed={false} />
      <TaskItem title="인형극 보기" completed={true} />
    </ul>
  );
}
