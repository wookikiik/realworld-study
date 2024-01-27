import { useState } from "react";
import "./Quiz.css";
import Spinner from "./Spinner.js";

export default function Quiz() {
  //
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing' | 'submitting' | 'success'

  if (status === "success") {
    return <h2>Thank you</h2>;
  }

  const isSubmitting = status === "submitting";
  const isError = error !== null;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error.message);
    }
  }

  return (
    <>
      {isSubmitting && <Spinner />}
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          disabled={isSubmitting}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <br />
        <button disabled={answer.trim().length === 0 || isSubmitting}>
          Submit
        </button>
        {isError && <p className="error">{error}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "lima") {
        resolve();
      }

      reject(new Error("Good guess but a wrong answer. Try again!"));
    }, 1000);
  });
}
