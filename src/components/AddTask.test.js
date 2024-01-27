import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";

const mockAddTask = jest.fn();
jest.mock("../contexts/task.js", () => ({
  useActions: () => ({
    addTask: mockAddTask,
  }),
}));

describe("AddTask", () => {
  describe("Render AddTask component", () => {
    it("should render", () => {
      render(<AddTask />);

      const inputElement = screen.getByPlaceholderText(/Add task/i);
      const addButtonElement = screen.getByText(/Add/i);

      expect(inputElement).toBeInTheDocument();
      expect(addButtonElement).toBeInTheDocument();
    });
  });

  describe("Actions AddTask component", () => {
    test("should call addTask with the correct task text", () => {
      render(<AddTask />);

      const inputElement = screen.getByPlaceholderText(/Add task/i);
      const addButtonElement = screen.getByText(/Add/i);

      const taskText = "Sample Task";
      fireEvent.change(inputElement, { target: { value: taskText } });
      fireEvent.click(addButtonElement);

      expect(mockAddTask).toHaveBeenCalledTimes(1);
      expect(mockAddTask).toHaveBeenCalledWith(taskText);
    });
  });
});
