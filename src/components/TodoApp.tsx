import React, { useEffect } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import ToggleComplete from "./ToggleComplete";
import TaskList from "./TaskList";
import AppFooter from "./TodoFooter";
import Footer from "./Footer";
import { useTasks, useFilterTasks, TasksProvider } from "../hooks";

const TodoApp: React.FC = () => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    clearCompleted,
  } = useTasks();
  const isEmptyTasks = tasks.length === 0;

  const filterTasks = useFilterTasks(tasks);

  useEffect(() => {
    const hash = window.location.hash.replace("#/", "");
    if (hash !== "") {
      window.location.hash = "";
    }
  }, []);

  return (
    <TasksProvider>
      <section className="todoapp">
        <Header>
          <AddTask onAdd={addTask} />
        </Header>
        <section className="main">
          <ToggleComplete tasks={filterTasks} onToggle={toggleComplete} />
          <TaskList
            tasks={filterTasks}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        </section>
        {isEmptyTasks || <AppFooter tasks={tasks} onClear={clearCompleted} />}
      </section>
      <Footer />
    </TasksProvider>
  );
};

export default TodoApp;
