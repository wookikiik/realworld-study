import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Quiz from "./Quiz";

describe("Quiz", () => {
  it("should disable the 'Submit' button when the form is empty", () => {
    render(<Quiz status="empty" />);
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeDisabled();
  });

  it("should enable the 'Submit' button when input is provided in the form", () => {
    render(<Quiz />);
    const submitButton = screen.getByText("Submit");
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Some input" } });
    expect(submitButton).toBeEnabled();
  });

  it("should disable the entire form and display a spinner while submission is in progress", () => {
    render(<Quiz status="submitting" />);
    const submitButton = screen.getByText("Submit");
    const textarea = screen.getByRole("textbox");
    expect(submitButton).toBeDisabled();
    expect(textarea).toBeDisabled();
    expect(screen.getByText("City quiz")).toBeInTheDocument();
    expect(
      screen.getByText(
        "In which city is there a billboard that turns air into drinkable water?"
      )
    ).toBeInTheDocument();
    expect(screen.getByTestId("Spinner")).toBeInTheDocument(); // Replace "Spinner" with the actual component used for the spinner
  });

  it("should display a 'Thank you' message instead of the form upon successful submission", () => {
    render(<Quiz status="success" />);
    expect(screen.getByText("Thank you")).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).toBeNull();
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("should maintain the input state and display an additional error message upon submission failure", () => {
    render(<Quiz status="error" />);
    const submitButton = screen.getByText("Submit");
    const textarea = screen.getByRole("textbox");
    expect(submitButton).toBeEnabled();
    expect(textarea).toHaveValue("");
    expect(
      screen.getByText("Good guess but a wrong answer. Try again!")
    ).toBeInTheDocument();
  });
});
