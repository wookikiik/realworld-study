import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList, { Task } from "./TaskList";

describe("Task", () => {
  const task = {
    id: 1,
    text: "Sample Task",
    done: false,
  };

  const onDeleteTask = jest.fn();
  const onUpdateTask = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders task correctly", () => {
    render(
      <Task
        task={task}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
      />
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Sample Task")).toBeInTheDocument();
    expect(screen.getByTestId("edit-button")).toBeInTheDocument();
    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
  });

  it("calls onUpdateTask when task checkbox is clicked", () => {
    render(
      <Task
        task={task}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
      />
    );

    fireEvent.click(screen.getByRole("checkbox"));

    expect(onUpdateTask).toHaveBeenCalledWith({ ...task, done: true });
  });

  it("calls onUpdateTask with updated text when task is edited", async () => {
    render(
      <Task
        task={task}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
      />
    );

    fireEvent.click(screen.getByTestId("edit-button"));
    fireEvent.click(screen.getByRole("checkbox"));

    const editInput = screen.getByRole("textbox");
    fireEvent.change(editInput, { target: { value: "Updated Task" } });

    fireEvent.click(screen.getByTestId("save-button"));

    expect(onUpdateTask).toHaveBeenCalledWith({
      ...task,
      text: "Updated Task",
    });
  });

  it("calls onDeleteTask when delete button is clicked", () => {
    render(
      <Task
        task={task}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
      />
    );

    fireEvent.click(screen.getByTestId("delete-button"));

    expect(onDeleteTask).toHaveBeenCalledWith(1);
  });
});

describe("TaskList", () => {
  const tasks = [
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
  ];

  const onDeleteTask = jest.fn();
  const onUpdateTask = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all tasks correctly", () => {
    render(
      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
      />
    );

    expect(screen.getByText("Sample Task 1")).toBeInTheDocument();
    expect(screen.getByText("Sample Task 2")).toBeInTheDocument();
  });
});
