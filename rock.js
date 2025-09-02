// A rock paper scissors game using function humanChoice versus computerChoice (5 rounds)
import readline from 'readline-sync';

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = readline.question("Enter your choice (rock, paper, scissors): ").toLowerCase();

  if (humanChoice === "rock") {
    return "rock";
  } else if (humanChoice === "paper") {
    return "paper";
  } else if (humanChoice === "scissors") {
    return "scissors";
  } else {
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice(); // ask again until valid
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  console.log(`Score → Human: ${humanScore}  Computer: ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(`You win the game! Final score: ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game! Final score: ${humanScore} - ${computerScore}`);
  } else {
    console.log(`It's a draw! Final score: ${humanScore} - ${computerScore}`);
  }
}

playGame();
