/**
 * Is Correct Answer
 *
 * @param {string} userAnswer
 * @returns Promise<string>
 */
export function isCorrectAnswer(userAnswer) {
  return new Promise((resolve, reject) => {
    if ((userAnswer || "").toLowerCase() !== "lima") {
      reject(new Error("Good guess but a wrong answer. Try again!"));
      return;
    }

    resolve("Correct answer");
  });
}
