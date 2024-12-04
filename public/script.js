function checkAnswer(button, correctAnswer) {
  const input = button.previousElementSibling;
  const result = button.nextElementSibling;

  if (input.value.trim() === correctAnswer) {
    result.textContent = "Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "Incorrect, try again.";
    result.style.color = "red";
  }
}
