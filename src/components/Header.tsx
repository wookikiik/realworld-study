import React from "react";

const Header: React.FC = () => (
  <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" />
  </header>
);

export default Header;
