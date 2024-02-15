import React from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import AppFooter from "./TodoAppFooter";
import Footer from "./Footer";

const TodoApp: React.FC = () => {
  return (
    <>
      <section className="todoapp">
        <Header />
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TaskList />
        </section>
        <AppFooter />
      </section>
      <Footer />
    </>
  );
};

export default TodoApp;
