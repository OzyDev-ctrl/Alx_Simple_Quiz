function checkAnswer() {
  // Function body
  var correctAnswer = "4"; // Correct answer
  var userAnswer = document.querySelector('input[name="quiz"]:checked').value; // Get user's answer
  
  // Compare user's answer with correct answer
  if (userAnswer === correctAnswer) {
      document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
      document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
