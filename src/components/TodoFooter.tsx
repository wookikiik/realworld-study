import React from "react";
import TaskCount from "./TaskCount";
import { Task } from "@/types";

const Footer: React.FC<FooterProps> = ({ tasks, onClear }) => {
  return (
    <footer className="footer">
      <TaskCount tasks={tasks} />
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
      <button className="clear-completed" onClick={onClear}>
        Clear completed
      </button>
    </footer>
  );
};

type FooterProps = {
  tasks: Task[];
  onClear: () => void;
};

export default Footer;
