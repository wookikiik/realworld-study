import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";

test("renders AddTask component", () => {
  render(<AddTask />);

  const inputElement = screen.getByPlaceholderText(/Add task/i);
  const addButtonElement = screen.getByText(/Add/i);

  expect(inputElement).toBeInTheDocument();
  expect(addButtonElement).toBeInTheDocument();
});

test("calls onAddTask function with correct text when form is submitted", () => {
  const mockOnAddTask = jest.fn();
  render(<AddTask onAddTask={mockOnAddTask} />);

  const inputElement = screen.getByPlaceholderText(/Add task/i);
  const addButtonElement = screen.getByText(/Add/i);

  const taskText = "Sample Task";
  fireEvent.change(inputElement, { target: { value: taskText } });
  fireEvent.click(addButtonElement);

  expect(mockOnAddTask).toHaveBeenCalledTimes(1);
  expect(mockOnAddTask).toHaveBeenCalledWith(taskText);
});
