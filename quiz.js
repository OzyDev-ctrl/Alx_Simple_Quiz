// Function Declaration
function checkAnswer() {
  // Identify the Correct Answer
  const correctAnswer = "4"; // Correct answer for the quiz question

  // Retrieve the User’s Answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Get the selected radio button

  // Check if the user has selected an answer
  if (userAnswer) {
      // Compare the User’s Answer with the Correct Answer
      if (userAnswer.value === correctAnswer) { // Use strict comparison
          document.getElementById('feedback').textContent = "Correct! Well done."; // Feedback for correct answer
      } else {
          document.getElementById('feedback').textContent = "That's incorrect. Try again!"; // Feedback for incorrect answer
      }
  } else {
      // If no option is selected, prompt the user to select an answer
      document.getElementById('feedback').textContent = "Please select an answer.";
  }
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
