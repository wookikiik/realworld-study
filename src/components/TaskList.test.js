import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList, { Task } from "./TaskList";

const mockUpdateTask = jest.fn();
const mockDeleteTask = jest.fn();

jest.mock("../hooks/useTasks", () => {
  return {
    useTasks: () => ({
      tasks: [
        {
          id: 1,
          text: "Sample Task 1",
          done: false,
        },
        {
          id: 2,
          text: "Sample Task 2",
          done: true,
        },
      ],
      updateTask: mockUpdateTask,
      deleteTask: mockDeleteTask,
    }),
  };
});

describe("Task", () => {
  const task = {
    id: 1,
    text: "Sample Task",
    done: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders task correctly", () => {
    render(<Task task={task} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Sample Task")).toBeInTheDocument();
    expect(screen.getByTestId("edit-button")).toBeInTheDocument();
    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
  });

  it("calls onUpdateTask when task checkbox is clicked", () => {
    render(<Task task={task} />);

    fireEvent.click(screen.getByRole("checkbox"));

    expect(mockUpdateTask).toHaveBeenCalledWith({ ...task, done: true });
  });

  it("calls onUpdateTask with updated text when task is edited", async () => {
    render(<Task task={task} />);

    fireEvent.click(screen.getByTestId("edit-button"));
    fireEvent.click(screen.getByRole("checkbox"));

    const editInput = screen.getByRole("textbox");
    fireEvent.change(editInput, { target: { value: "Updated Task" } });

    fireEvent.click(screen.getByTestId("save-button"));

    expect(mockUpdateTask).toHaveBeenCalledWith({
      ...task,
      text: "Updated Task",
    });
  });

  it("calls onDeleteTask when delete button is clicked", () => {
    render(<Task task={task} />);
    fireEvent.click(screen.getByTestId("delete-button"));
    expect(mockDeleteTask).toHaveBeenCalledWith(task.id);
  });
});

describe("TaskList", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all tasks correctly", () => {
    render(<TaskList />);

    expect(screen.getByText("Sample Task 1")).toBeInTheDocument();
    expect(screen.getByText("Sample Task 2")).toBeInTheDocument();
  });
});
