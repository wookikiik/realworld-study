import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useTasksActions } from "../hooks";

const AddTask: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const { addTask } = useTasksActions();

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

    addTask(titleRef.current.value);
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

export default AddTask;
