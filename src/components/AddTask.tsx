import React, { useRef } from "react";

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const titleRef = useRef<HTMLInputElement>(null);

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();
    if (!titleRef.current) {
      // TODO: show notification
      return;
    }

    onAdd(titleRef.current.value);
  }

  return (
    <form onSubmit={handleAddTask}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        ref={titleRef}
      />
    </form>
  );
};

type AddTaskProps = {
  onAdd: (title: string) => void;
};

export default AddTask;
