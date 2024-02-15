import React, { useState } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import ToggleComplete from "./ToggleComplete";
import TaskList from "./TaskList";
import AppFooter from "./TodoFooter";
import Footer from "./Footer";

const TodoApp: React.FC = () => {
  // TODO: isEmptyTasks is computed value
  const [isEmptyTasks] = useState(false);

  return (
    <>
      <section className="todoapp">
        <Header>
          <AddTask />
        </Header>
        <section className="main">
          <ToggleComplete />
          <TaskList />
        </section>
        {isEmptyTasks || <AppFooter />}
      </section>
      <Footer />
    </>
  );
};

export default TodoApp;
