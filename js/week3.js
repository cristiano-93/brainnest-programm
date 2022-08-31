// Assignment 2
// a) find square diagonal

let sideLength = 9;

function findDiagonal(length) {
  return Math.sqrt(2) * length;
}
let squareDiagonal;
squareDiagonal = findDiagonal(sideLength).toFixed(3);

console.log(`Square diagonal is ${squareDiagonal}`);

// b) find triangle area

let side1 = 5,
  side2 = 6,
  side3 = 7;
let semiPerimeter = (side1 + side2 + side3) / 2;

let triangleArea = Math.sqrt(semiPerimeter * ((semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3)));

console.log(`Triangle area is ${triangleArea.toFixed(3)}`);

// c) find circumference and surface area of circle

let circleRadius = 4;

function circleDiameter(radius) {
  return radius * 2;
}
let diameter = circleDiameter(circleRadius);
console.log(`The circle diameter is ${diameter}`);

function circleArea(radius) {
  return Math.PI * (radius * radius);
}
let area = circleArea(circleRadius).toFixed(3);
console.log(`The circle surface area is ${area}`);

// Assignment 3
// a) display largest of 2 integers

function largerInteger(int1, int2) {
  if (int1 > int2) {
    console.log("first number is larger");
  } else {
    console.log("second number is larger");
  }
}
// input 2 numbers and function will choose which one is higher
largerInteger(5, 8);

// b) check if number is odd or even

function isEven(number) {
  if (number % 2 == 0) {
    console.log(`The number ${number} is Even`);
  } else {
    console.log(`The number ${number} is Odd`);
  }
}
// input 1 number and function will return if its even or odd
isEven(6);

// ------ Main JavaScript Project ------

let userScore = 0;
let computerScore = 0;

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

function playRound() {
  var playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();

  let computerSelection = getComputerPlay();
  // if invalid input it will skipp the selection compare but round will still count
  if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    console.log("invalid input, please choose 'rock', 'paper' or 'scissors' !");
  } else {
    // logging choices
    console.log(`You have chosen ${playerSelection} and the computer choose ${computerSelection}`);

    // Tie scenario
    if (playerSelection === computerSelection) {
      console.log("its a tie!  Play again!");
    }
    // Other scenarios
    else if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        console.log("You won! Rock beats Scissors");
        userScore++;
      } else if (computerSelection === "paper") {
        console.log("You lost! Paper beats Rock");
        computerScore++;
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        console.log("You won! Paper beats Rock");
        userScore++;
      } else if (computerSelection === "scissors") {
        console.log("You lost! Scissors beats Paper");
        computerScore++;
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        console.log("You won! Scissors beats Paper");
        userScore++;
      } else if (computerSelection === "rock") {
        console.log("You lost! Rock beats Scissors");
        computerScore++;
      }
    }
    console.log(`Current score: user ${userScore} <> ${computerScore} computer`);
    
  }
}

function game() {
  // for loop to run game function 5 times. using this loop could result in a draw.
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Round ${i + 1}`);
  }
  if (userScore > computerScore) {
    console.log("You won the game! Congratulations!");
  } else if (userScore < computerScore) {
    console.log("Computer won the game! Try again next time!");
  } else {
    console.log("It's a draw!");
  }
}
game();
