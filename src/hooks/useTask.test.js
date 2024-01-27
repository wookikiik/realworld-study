import { renderHook, act } from "@testing-library/react";
import useTask from "./useTask";

describe("useTask", () => {
  it("should add a task correctly", () => {
    const { result } = renderHook(() => useTask([]));

    act(() => {
      result.current.addTask("Sample Task");
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text).toBe("Sample Task");
    expect(result.current.tasks[0].done).toBe(false);
  });

  it("should delete a task correctly", () => {
    const initialTasks = [
      { id: 1, text: "Task 1", done: false },
      { id: 2, text: "Task 2", done: true },
    ];
    const { result } = renderHook(() => useTask(initialTasks));

    act(() => {
      result.current.deleteTask(1);
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].id).toBe(2);
    expect(result.current.tasks[0].text).toBe("Task 2");
    expect(result.current.tasks[0].done).toBe(true);
  });

  it("should update a task correctly", () => {
    const initialTasks = [
      { id: 1, text: "Task 1", done: false },
      { id: 2, text: "Task 2", done: true },
    ];
    const { result } = renderHook(() => useTask(initialTasks));

    const updatedTask = { id: 1, text: "Updated Task", done: true };

    act(() => {
      result.current.updateTask(updatedTask);
    });

    expect(result.current.tasks).toHaveLength(2);
    expect(result.current.tasks[0].id).toBe(1);
    expect(result.current.tasks[0].text).toBe("Updated Task");
    expect(result.current.tasks[0].done).toBe(true);
  });
});
