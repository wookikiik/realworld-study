import React from "react";

const Header: React.FC<HeaderProps> = ({ children }) => (
  <header className="header">
    <h1>todos</h1>
    {children}
  </header>
);

type HeaderProps = {
  children: React.ReactNode;
};

export default Header;
