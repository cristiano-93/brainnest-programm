// ------ Main JavaScript Project ------

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
let textOutput = document.getElementById("textOutput");
const playerOptions = [rockBtn, paperBtn, scissorsBtn];

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
  });
});
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
    } else if (computerSelection === "paper") {
      textOutput.innerHTML = "You lost! Paper beats Rock";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      textOutput.innerHTML = "You won! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      textOutput.innerHTML = "You lost! Scissors beats Paper";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      textOutput.innerHTML = "You won! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      textOutput.innerHTML = "You lost! Rock beats Scissors";
    }
  }
}
