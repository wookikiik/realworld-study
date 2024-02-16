import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleComplete from "./ToggleComplete";
import { Task } from "@/types";

const mockUseTasksState = jest.fn();
const mockToggleComplete = jest.fn();
jest.mock("../hooks", () => ({
  useTasksActions: () => ({ toggleComplete: mockToggleComplete }),
  useTasksState: () => mockUseTasksState(),
  useFilterTasks: (tasks: Task[]) => tasks,
}));

describe("ToggleComplete", () => {
  describe("Rendering", () => {
    it("null rendering if empty tasks", () => {
      mockUseTasksState.mockReturnValue({ tasks: [] });
      render(<ToggleComplete />);
      const checkbox = screen.queryByTestId("toggle-all");
      expect(checkbox).not.toBeInTheDocument();
    });

    it("init checked if all tasks are completed", () => {
      mockUseTasksState.mockReturnValue({ tasks: [{ complete: true }] });

      render(<ToggleComplete />);
      const checkbox = screen.getByTestId("toggle-all");
      expect(checkbox).toBeChecked();
    });

    it("init unchecked if any tasks are not completed", () => {
      mockUseTasksState.mockReturnValue({ tasks: [{ complete: false }] });

      render(<ToggleComplete />);
      const checkbox = screen.getByTestId("toggle-all");
      // screen.debug(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe("Re-Rendering", () => {
    it("tasks updated, checkbox should be checked", () => {
      mockUseTasksState.mockReturnValue({ tasks: [{ complete: false }] });
      const { rerender } = render(<ToggleComplete />);
      const checkbox = screen.getByTestId("toggle-all");
      expect(checkbox).not.toBeChecked();

      mockUseTasksState.mockReturnValue({ tasks: [{ complete: true }] });
      rerender(<ToggleComplete />);
      expect(checkbox).toBeChecked();
    });
  });

  describe("Events", () => {
    it("calls onToggle when checkbox is clicked", () => {
      mockUseTasksState.mockReturnValue({ tasks: [{ complete: false }] });
      mockToggleComplete.mockImplementation(() => {
        mockUseTasksState.mockReturnValueOnce({ tasks: [{ complete: true }] });
      });
      render(<ToggleComplete />);
      const label = screen.getByTestId("checkbox-label");
      fireEvent.click(label);

      expect(mockToggleComplete).toHaveBeenCalledTimes(1);
    });
  });
});
