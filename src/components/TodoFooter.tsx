import React from "react";
import TaskCount from "./TaskCount";
import { Task } from "@/types";
import { useLocation } from "../hooks";

const Footer: React.FC<FooterProps> = ({ tasks, onClear }) => {
  const hash = useLocation((location) => location.hash.replace("#", ""));

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
      <button className="clear-completed" onClick={onClear}>
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

type FooterProps = {
  tasks: Task[];
  onClear: () => void;
};

type LinkProps = {
  hash: string;
  to: string;
  children: React.ReactNode;
};

export default Footer;
