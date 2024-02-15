import React, { useRef } from "react";

const AddTask: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();
    console.log("addTask", titleRef.current?.value);
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

export default AddTask;
