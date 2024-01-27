import { useState } from "react";

export default function useTask(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);
  function addTask(text) {
    setTasks((prevTasks) => {
      const lastId =
        prevTasks.length > 0 ? prevTasks[prevTasks.length - 1].id : -1;
      const newTask = { id: lastId + 1, text, done: false };
      return [...prevTasks, newTask];
    });
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function updateTask(task) {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((t) => t.id === task.id);
      const newTasks = [...prevTasks];
      newTasks[index] = task;
      return newTasks;
    });
  }

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
  };
}
