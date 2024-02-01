import React from "react";
import { render, screen } from "@testing-library/react";
import { TasksProvider } from "./useTasks";

describe("TasksProvider", () => {
  test("renders children", () => {
    render(
      <TasksProvider>
        <div>Test Children</div>
      </TasksProvider>
    );

    const childrenElement = screen.getByText("Test Children");
    expect(childrenElement).toBeInTheDocument();
  });
});
