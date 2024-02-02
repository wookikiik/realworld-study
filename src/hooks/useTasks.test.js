import React from "react";
import { render, screen } from "@testing-library/react";
import { tasksReducer, TasksProvider } from "./useTasks";

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

describe("tasksReducer", () => {
  test("adds a task to the state", () => {
    const state = [];
    const action = { type: "ADD_TASK", task: { id: 1, name: "Task 1" } };
    tasksReducer(state, action);
    expect(state).toEqual([{ id: 1, name: "Task 1" }]);
  });

  test("updates a task in the state", () => {
    const state = [{ id: 1, name: "Task 1" }];
    const action = {
      type: "UPDATE_TASK",
      task: { id: 1, name: "Updated Task 1" },
    };
    tasksReducer(state, action);
    expect(state).toEqual([{ id: 1, name: "Updated Task 1" }]);
  });

  test("deletes a task from the state", () => {
    const initialState = [
      { id: 1, name: "Task 1" },
      { id: 2, name: "Task 2" },
    ];
    const action = { type: "DELETE_TASK", id: 1 };
    const newState = tasksReducer(initialState, action);
    expect(newState).toEqual([{ id: 2, name: "Task 2" }]);
  });

  test("throws an error for unknown action type", () => {
    const initialState = [];
    const action = { type: "UNKNOWN_ACTION" };
    expect(() => tasksReducer(initialState, action)).toThrow(
      "Unknown action: UNKNOWN_ACTION"
    );
  });
});
