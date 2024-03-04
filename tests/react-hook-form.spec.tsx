import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import React from "react";

describe("React Hook Form", () => {
  describe("useForm", () => {
    it("useForm is a custom hook that simplifies form management.", () => {
      const TestComponent = () => {
        const { register } = useForm();
        return <input {...register("testInput")} />;
      };

      render(<TestComponent />);
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("name", "testInput");
    });

    it("mode option is used to determine when to trigger validation.", async () => {
      const TestComponent = () => {
        const {
          register,
          formState: { errors },
        } = useForm<{ testInput: string }>({
          mode: "onBlur", // or onChange, onTouch, onSubmit
        });
        return (
          <form>
            {errors.testInput && <span data-testid="errors">error</span>}
            <input {...register("testInput", { required: true })} />;
          </form>
        );
      };

      render(<TestComponent />);

      // fire input blur event
      const input = screen.getByRole("textbox");
      fireEvent.blur(input);
      await waitFor(() => {
        expect(screen.queryByTestId("errors")).toBeInTheDocument();
      });
    });
  });

  describe("register", () => {
    it("register 기본 사용 방법", () => {});
    it("register를 사용하여 confirm password 유효성 검증 구현하기", async () => {
      const TestComponent = () => {
        const {
          register,
          watch,
          formState: { errors },
        } = useForm({
          mode: "onChange",
        });
        const password = watch("password", "");
        return (
          <form>
            {errors.confirmPassword && <span data-testid="errors">error</span>}
            <input
              data-testid="password"
              {...register("password", { required: true })}
            />
            <input
              data-testid="confirmPassword"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "Miss match password",
              })}
            />
          </form>
        );
      };

      render(<TestComponent />);
      const password = screen.getByTestId("password");
      const confirmPassword = screen.getByTestId("confirmPassword");

      fireEvent.input(password, { target: { value: "test" } });
      fireEvent.input(confirmPassword, { target: { value: "test2" } });

      await waitFor(() => {
        expect(screen.queryByTestId("errors")).toBeInTheDocument();
      });
    });
  });
});

// 이 메서드를 사용하면 입력 또는 선택 요소를 등록하고 React Hook 양식에 유효성 검사 규칙을 적용할 수 있습니다.
// 유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며 사용자 정의 유효성 검사 방법도 허용합니다.
// describe("register", () => {
//   it("should register input", () => {
//     const TestComponent = () => {
//       const { register } = useForm();
//       return <input {...register("testInput")} />;
//     };

//     render(<TestComponent />);
//     const input = screen.getByRole("textbox");
//     expect(input).toBeInTheDocument();
//   });

//   it("should register input with validation", () => {
//     const TestComponent = () => {
//       const { register } = useForm({
//         mode: "onChange",
//       });
//       return <input {...register("testInput", { required: true })} />;
//     };

//     render(<TestComponent />);
//     const input = screen.getByRole("textbox");
//     expect(input).toBeInTheDocument();
//   });
// });

// type FormFields = {
//   testInput: string;
// };

// const onSubmit = jest.fn();

// const TestComponent = () => {
//   const { handleSubmit, register } = useForm<FormFields>();

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("testInput")} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// it("should submit correct data", async () => {
//   render(<TestComponent />);
//   // screen.debug();
//   const input = screen.getByRole("textbox");
//   const button = screen.getByRole("button", { name: /submit/i });

//   fireEvent.input(input, { target: { value: "test value" } });
//   fireEvent.click(button);

//   await waitFor(() => {
//     expect(onSubmit).toHaveBeenCalled();
//   });
// });
