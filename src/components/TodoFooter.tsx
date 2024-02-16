import React from "react";
import TaskCount from "./TaskCount";
import { useTasksActions, useTasksState, useLocation } from "../hooks";

const Footer: React.FC = () => {
  const { clearCompleted } = useTasksActions();
  const hash = useLocation((location) => location.hash.replace("#", ""));
  const { tasks } = useTasksState();
  if (tasks.length === 0) return null;

  return (
    <footer className="footer">
      <TaskCount tasks={tasks} />
      <ul className="filters">
        <Link hash={hash} to="/">
          All
        </Link>
        <Link hash={hash} to="/active">
          Active
        </Link>
        <Link hash={hash} to="/completed">
          Completed
        </Link>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

const Link: React.FC<LinkProps> = ({ hash, to, children }) => {
  return (
    <li>
      <a href={`#${to}`} className={hash === to ? "selected" : ""}>
        {children}
      </a>
    </li>
  );
};

type LinkProps = {
  hash: string;
  to: string;
  children: React.ReactNode;
};

export default Footer;
