import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleComplete from "./ToggleComplete";
import { Task } from "@/types";

describe("ToggleComplete", () => {
  describe("Rendering", () => {
    it("null rendering if empty tasks", () => {
      render(<ToggleComplete tasks={[]} onToggle={() => {}} />);
      const checkbox = screen.queryByTestId("toggle-all");
      expect(checkbox).not.toBeInTheDocument();
    });

    it("init checked if all tasks are completed", () => {
      const tasks: Task[] = [
        { id: "1", title: "Task 1", complete: true },
        { id: "2", title: "Task 2", complete: true },
      ];

      render(<ToggleComplete tasks={tasks} onToggle={() => {}} />);
      const checkbox = screen.getByTestId("toggle-all");
      expect(checkbox).toBeChecked();
    });

    it("init unchecked if any tasks are not completed", () => {
      const tasks: Task[] = [
        { id: "1", title: "Task 1", complete: true },
        { id: "2", title: "Task 2", complete: false },
      ];

      render(<ToggleComplete tasks={tasks} onToggle={() => {}} />);
      const checkbox = screen.getByTestId("toggle-all");
      // screen.debug(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe("Re-Rendering", () => {
    it("tasks updated, checkbox should be checked", () => {
      const tasks = [{ complete: false }, { complete: false }] as Task[];
      const { rerender } = render(
        <ToggleComplete tasks={tasks} onToggle={() => {}} />
      );
      const checkbox = screen.getByTestId("toggle-all");
      expect(checkbox).not.toBeChecked();

      const updatedTasks = [{ complete: true }, { complete: true }] as Task[];
      rerender(<ToggleComplete tasks={updatedTasks} onToggle={() => {}} />);
      expect(checkbox).toBeChecked();
    });
  });

  describe("Events", () => {
    it("calls onToggle when checkbox is clicked", () => {
      const tasks = [{ complete: false }] as Task[];
      const onToggle = jest.fn();

      render(<ToggleComplete tasks={tasks} onToggle={onToggle} />);
      const checkbox = screen.getByTestId("toggle-all");
      const label = screen.getByTestId("checkbox-label");

      fireEvent.click(label);

      expect(onToggle).toHaveBeenCalledTimes(1);
      expect(checkbox).toBeChecked();
    });
  });

  // it("displays the checkbox with correct defaultChecked value", () => {
  //   const { getByTestId } = render(
  //     <ToggleComplete tasks={tasks} onToggle={() => {}} />
  //   );
  //   const checkbox = getByTestId("toggle-all-checkbox");
  //   expect(checkbox).toBeInTheDocument();
  //   expect(checkbox).toHaveProperty("checked", false);
  // });

  // it("updates the checkbox when all tasks are completed", () => {
  //   const { getByTestId, rerender } = render(
  //     <ToggleComplete tasks={tasks} onToggle={() => {}} />
  //   );
  //   const checkbox = getByTestId("toggle-all-checkbox");
  //   expect(checkbox).toHaveProperty("checked", false);

  //   const updatedTasks = tasks.map((task) => ({ ...task, complete: true }));
  //   rerender(<ToggleComplete tasks={updatedTasks} onToggle={() => {}} />);
  //   expect(checkbox).toHaveProperty("checked", true);
  // });

  // it("calls the onToggle function when the label is clicked", () => {
  //   const onToggleMock = jest.fn();
  //   const { getByText } = render(
  //     <ToggleComplete tasks={tasks} onToggle={onToggleMock} />
  //   );
  //   const label = getByText("Mark all as complete");
  //   fireEvent.click(label);
  //   expect(onToggleMock).toHaveBeenCalledTimes(1);
  // });
});
