// Function Declaration
function checkAnswer() {
  // Identify the Correct Answer
  var correctAnswer = "4"; // This is the correct answer

  // Retrieve the User’s Answer
  var userAnswer = document.querySelector('input[name="quiz"]:checked'); // Get the selected radio button

  // Check if an answer has been selected
  if (userAnswer) {
      // Compare the User’s Answer with the Correct Answer
      if (userAnswer.value === correctAnswer) { // Check if the selected answer is correct
          document.getElementById('feedback').textContent = "Correct! Well done."; // Feedback for correct answer
      } else {
          document.getElementById('feedback').textContent = "That's incorrect. Try again!"; // Feedback for incorrect answer
      }
  } else {
      document.getElementById('feedback').textContent = "Please select an answer."; // Prompt if no option is selected
  }
}

// Retrieve the “submit-answer” button
var submitButton = document.getElementById('submit-answer'); // Get the submit button

// Add an Event Listener to the Submit Button
submitButton.addEventListener('click', checkAnswer); // Call checkAnswer on button click
