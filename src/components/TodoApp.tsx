import React, { useEffect } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import ToggleComplete from "./ToggleComplete";
import TaskList from "./TaskList";
import AppFooter from "./TodoFooter";
import Footer from "./Footer";
import { TasksProvider } from "../hooks";

const TodoApp: React.FC = () => {
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
          <AddTask />
        </Header>
        <section className="main">
          <ToggleComplete />
          <TaskList />
        </section>
        <AppFooter />
      </section>
      <Footer />
    </TasksProvider>
  );
};

export default TodoApp;
