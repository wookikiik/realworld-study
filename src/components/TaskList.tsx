import React, { useRef, useState } from "react";
import { Task } from "@types";
import { flushSync } from "react-dom";
import { useTasksActions, useTasksState, useFilterTasks } from "../hooks";
const TaskList: React.FC = () => {
  const { tasks } = useTasksState();
  const filterTasks = useFilterTasks(tasks);
  return (
    <ul className="todo-list">
      {filterTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { updateTask, deleteTask } = useTasksActions();

  const statusStyles = [];
  task.complete && statusStyles.push("completed");
  isEditing && statusStyles.push("editing");

  function toggleEditing() {
    const nextEditingState = !isEditing;

    // Edit 가능 상태가 되면 Input 요소에 포커스를 주기 위해 flushSync를 사용.
    flushSync(() => setIsEditing(nextEditingState));
    if (nextEditingState) {
      inputRef.current?.focus();
    }
  }

  function handleChangeComplete(e: React.ChangeEvent<HTMLInputElement>) {
    updateTask({
      ...task,
      complete: e.target.checked,
    });
  }

  function handleSubmitTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = inputRef.current?.value.trim();
    if (title) {
      updateTask({
        ...task,
        title,
      });
      toggleEditing();
    }
  }

  return (
    <li className={statusStyles.join(" ")}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.complete}
          onChange={handleChangeComplete}
        />
        <label onDoubleClick={toggleEditing}>{task.title}</label>
        <button
          className="destroy"
          onClick={() => deleteTask(task.id)}
        ></button>
      </div>
      <form onSubmit={handleSubmitTask}>
        <input className="edit" defaultValue={task.title} ref={inputRef} />
      </form>
    </li>
  );
};

export default TaskList;

type TaskItemProps = {
  task: Task;
};
