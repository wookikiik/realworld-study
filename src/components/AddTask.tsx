import React, { useRef } from "react";
import { toast } from "react-toastify";
const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const titleRef = useRef<HTMLInputElement>(null);

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();
    if (!titleRef.current) {
      throw new Error("titleRef is not assigned");
    }

    if (titleRef.current.value.trim() === "") {
      toast.warn("타이틀을 입력해주세요", {
        position: "top-center",
      });
      return;
    }

    onAdd(titleRef.current.value);
    titleRef.current.value = "";
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
