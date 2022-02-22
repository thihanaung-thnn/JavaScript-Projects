let randomNumber = Math.floor(Math.random() * 100) + 1;
const userInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const message = document.querySelector(".message");
const selectScore = document.querySelector(".score");
const selectBody = document.querySelector("body");
const selectNumber = document.querySelector(".number");

let score = 20;
let highscore = 0;

// functions
function setScore() {
  document.querySelector(".score").innerText = score;
}

function gameOver() {
  message.textContent = "💣 You lost the game";
  selectScore.textContent = 0;
  selectBody.style.background = "red";
}

// eventListeners
checkButton.addEventListener("click", function () {
  const userAnswer = Number(userInput.value);
  if (!userAnswer) {
    message.innerText = "⚠ no number";
  } else if (userAnswer === randomNumber) {
    message.innerText = "🎉Correct";
    selectBody.style.backgroundColor = "#60b347";
    selectNumber.innerText = randomNumber;
    selectNumber.style.width = "30rem";
    score--;
    selectScore.innerText = score;
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").innerText = highscore;
    }
  } else if (userAnswer !== randomNumber) {
    if (score > 1) {
      message.innerText =
        userAnswer > randomNumber ? "📈 Too High" : "📉 Too Low";
      score--;
      selectScore.innerText = score;
    } else gameOver();
  }
});

againButton.addEventListener("click", function () {
  selectBody.style.backgroundColor = "#222";
  message.innerText = "Start Guessing...";
  score = 20;
  selectScore.innerText = score;
  selectNumber.innerText = "?";
  userInput.value = "";
  selectNumber.style.width = "15rem";
  randomNumber = Math.floor(Math.random() * 20) + 1;
});
