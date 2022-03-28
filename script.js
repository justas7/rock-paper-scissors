"use strict";

const choices = ["rock", "paper", "scissors"];
let winner = "";
let playerWins = 0;
let computerWins = 0;

const choiceBtns = document.querySelectorAll(".choiceBtn");
const roundsLog = document.querySelector("#roundsLog");
const resultDiv = document.querySelector("#gameResult");
const winsCounterP = document.querySelector("#winsCounter");
const playerSelectionDiv = document.querySelectorAll(".selection")[0];
const computerSelectionDiv = document.querySelectorAll(".selection")[1];
const restartBtn = document.createElement("button");
restartBtn.type = "button";
restartBtn.classList.add("restartBtn");
restartBtn.textContent = "Play Again";

/* Helper functions */
const firstLetterUpperCase = function (word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
};

/* Decides what computer plays*/
const computerPlay = function () {
  let choice = choices[Math.floor(Math.random() * choices.length)];

  return choice;
};

/* Rock paper scissors game logic */
const playRound = function () {
  let playerSelection = this.alt;
  let computerSelection = computerPlay();

  playerSelectionDiv.innerHTML = `<img class="image"  src="images/${playerSelection}.png" alt="${playerSelection}" />`;
  computerSelectionDiv.innerHTML = `<img class="image" src="images/${computerSelection}.png" alt="${computerSelection}" />`;

  if (playerSelection === computerSelection) {
    roundsLog.textContent = "It's a Tie!";
    winner = "";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    roundsLog.textContent = "You lost... Rock beats Scissors.";
    winner = "computer";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    choices.indexOf(playerSelection) > choices.indexOf(computerSelection)
  ) {
    roundsLog.textContent = `You won! ${firstLetterUpperCase(playerSelection)}
      beats ${firstLetterUpperCase(computerSelection)}.`;
    winner = "player";
  } else {
    roundsLog.textContent = `You lost... ${firstLetterUpperCase(computerSelection)}
      beats ${firstLetterUpperCase(playerSelection)}.`;
    winner = "computer";
  }
};

/* Game */
const game = function (e) {
  const playRoundBinded = playRound.bind(e.target);
  playRoundBinded();

  if (winner === "player") playerWins++;
  if (winner === "computer") computerWins++;
  winsCounterP.innerHTML = `<span>Player: ${playerWins}</span> <span>Computer: ${computerWins}</span>`;

  if (playerWins === 5 || computerWins === 5) {
    playerWins === 5 ? (roundsLog.textContent = `You won.`) : (roundsLog.textContent = `You lost.`);
    roundsLog.appendChild(restartBtn);

    choiceBtns.forEach((btn) => {
      btn.removeEventListener("click", game);
    });
  }
};

/* restart game */
const restartGame = function () {
  winner = "";
  playerWins = 0;
  computerWins = 0;
  playerSelectionDiv.innerHTML = "";
  computerSelectionDiv.innerHTML = "";
  roundsLog.textContent = "";
  winsCounterP.innerHTML = `<span>Player: 0</span> <span>Computer: 0</span>`;

  choiceBtns.forEach(function (btn) {
    btn.addEventListener("click", game);
  });
};

/* event listeners*/
choiceBtns.forEach(function (btn) {
  btn.addEventListener("click", game);
});

restartBtn.addEventListener("click", restartGame);
