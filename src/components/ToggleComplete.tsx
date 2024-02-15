import React from "react";

const ToggleComplete: React.FC = () => {
  return (
    <>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
};

export default ToggleComplete;
