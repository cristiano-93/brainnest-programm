// ------ Main JavaScript Project ------

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
let textOutput = document.getElementById("textOutput");
const playerOptions = [rockBtn, paperBtn, scissorsBtn];

let playerScore = 0;
let computerScore = 0;
const scoreText = document.getElementById("scoreOutput");
scoreText.innerHTML = `Player ${playerScore} <> ${computerScore} Computer`;

// function assigning random choice to computer
function getComputerPlay() {
  var computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    computerChoice = "rock";
    return computerChoice;
  } else if (computerChoice == 1) {
    computerChoice = "paper";
    return computerChoice;
  } else if (computerChoice == 2) {
    computerChoice = "scissors";
    return computerChoice;
  }
}
playerOptions.forEach((option) => {
  option.addEventListener("click", function () {
    playRound(this.innerText.toLowerCase());
    if (playerScore === 5) {
      alert("Player has won the match!");
      restartGame();
    }
    if (computerScore === 5) {
      alert("Computer has won the match!");
      restartGame();
    }
  });
});
function restartGame() {
  computerScore = 0;
  playerScore = 0;
}
function playRound(playerSelection) {
  let computerSelection = getComputerPlay();

  // Tie scenario
  if (playerSelection === computerSelection) {
    textOutput.innerHTML = "It's a tie!";
  }
  // Other scenarios
  else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      textOutput.innerHTML = "You won! Rock beats Scissors";
      playerScore++;
    } else if (computerSelection === "paper") {
      textOutput.innerHTML = "You lost! Paper beats Rock";
      computerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      textOutput.innerHTML = "You won! Paper beats Rock";
      playerScore++;
    } else if (computerSelection === "scissors") {
      textOutput.innerHTML = "You lost! Scissors beats Paper";
      computerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      textOutput.innerHTML = "You won! Scissors beats Paper";
      playerScore++;
    } else if (computerSelection === "rock") {
      textOutput.innerHTML = "You lost! Rock beats Scissors";
      computerScore++;
    }
  }
  scoreText.innerHTML = `Player ${playerScore} <> ${computerScore} Computer`;
}
