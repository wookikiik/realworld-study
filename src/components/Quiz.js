import "./Quiz.css";
import Spinner from "./Spinner.js";

export default function Quiz({ status = "error" }) {
  const isEmpty = status === "empty";
  // const isTyping = status === "typing";
  const isSubmitting = status === "submitting";
  const isError = status === "error";
  const isSuccess = status === "success";

  if (isSuccess) {
    return <h2>Thank you</h2>;
  }

  return (
    <>
      {isSubmitting && <Spinner />}
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={isSubmitting} />
        <br />
        <button disabled={isEmpty || isSubmitting}>Submit</button>
        {isError && (
          <p className="error">Good guess but a wrong answer. Try again!</p>
        )}
      </form>
    </>
  );
}
