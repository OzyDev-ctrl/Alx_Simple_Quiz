// Function Declaration
function checkAnswer() {
  // Identify the Correct Answer
  const correctAnswer = "4"; // Correct answer for the quiz question

  // Retrieve the User’s Answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Get the selected radio button

  // Check if the user has selected an answer
  if (userAnswer) {
      const userValue = userAnswer.value; // Access the value of the selected radio button

      // Compare the User’s Answer with the Correct Answer (direct comparison)
      if (userValue === correctAnswer) {
          // User's answer is correct
          document.getElementById('feedback').textContent = "Correct! Well done.";
      } else {
          // User's answer is incorrect
          document.getElementById('feedback').textContent = "That's incorrect. Try again!";
      }
  } else {
      // If no option is selected
      document.getElementById('feedback').textContent = "Please select an answer.";
  }
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
