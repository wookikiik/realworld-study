import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import ToggleComplete from "./ToggleComplete";
import TaskList from "./TaskList";
import AppFooter from "./TodoFooter";
import Footer from "./Footer";
import { useTasks, useFilterTasks } from "../hooks";

const TodoApp: React.FC = () => {
  const { tasks, addTask } = useTasks();
  const isEmptyTasks = tasks.length === 0;

  const filterTasks = useFilterTasks(tasks);

  return (
    <>
      <section className="todoapp">
        <Header>
          <AddTask onAdd={addTask} />
        </Header>
        <section className="main">
          <ToggleComplete />
          <TaskList tasks={filterTasks} />
        </section>
        {isEmptyTasks || <AppFooter />}
      </section>
      <Footer />
    </>
  );
};

export default TodoApp;
