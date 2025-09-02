// A rock paper scissors game using function humanChoice versus computerChoice (5 rounds)
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#results")
const score = document.querySelector("#score")

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    result.textContent ="It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  score.textContent = `Score → Human: ${humanScore}  Computer: ${computerScore}`;
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);
//   }

//   if (humanScore > computerScore) {
//     console.log(`You win the game! Final score: ${humanScore} - ${computerScore}`);
//   } else if (computerScore > humanScore) {
//     console.log(`You lose the game! Final score: ${humanScore} - ${computerScore}`);
//   } else {
//     console.log(`It's a draw! Final score: ${humanScore} - ${computerScore}`);
//   }
// }

// playGame();


