import React from "react";
import TaskCount from "./TaskCount";

const Footer: React.FC = () => {
  function handleClearCompleted() {
    console.log("Clear completed tasks");
  }

  return (
    <footer className="footer">
      <TaskCount taskList={[]} />
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
