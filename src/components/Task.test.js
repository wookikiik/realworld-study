import { render, screen } from "@testing-library/react";
import Task from "./Task";

test("renders Task component with title", () => {
  render(<Task title="Test Title" />);
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});
