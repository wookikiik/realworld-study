import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render the App component", () => {
    render(<App />);

    // title
    const title = screen.getByText("프라하에서 해야 할 일");

    // form for Add Task
    const form = screen.getByTestId("task-add-form");
    const newTaskInput = screen.getByTestId("new-task");
    const addButton = screen.getByRole("button", { name: "Add" });

    // task list
    const taskList = screen.getByTestId("task-list");

    expect(title).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(newTaskInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(taskList).toBeInTheDocument();
  });
});
