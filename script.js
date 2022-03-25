"use strict";

const choices = ["rock", "paper", "scissors"];
let winner = "";
let playerWins = 0;
let computerWins = 0;

const choiceBtns = document.querySelectorAll(".choiceBtn");
const roundsLog = document.querySelector("#roundsLog");
const resultDiv = document.querySelector("#gameResult");
const winsCounterP = document.querySelector("#winsCounter");
const resultP = document.createElement("p");

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
  let playerSelection = this.name;
  let computerSelection = computerPlay();

  console.log(playerSelection);
  console.log(computerSelection);

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
  winsCounterP.textContent = `Player: ${playerWins} | Computer ${computerWins}`;

  if (playerWins === 5) {
    choiceBtns.forEach((btn) => (btn.disabled = true));
    resultP.textContent = "You won the game. Reload the page to play again.";
    resultDiv.insertBefore(resultP, winsCounterP);
  }

  if (computerPlay === 5) {
    choiceBtns.forEach((btn) => (btn.disabled = true));
    resultP.textContent = "You lost the game. Reload the page to play again.";
    resultDiv.insertBefore(resultP, winsCounterP);
  }
};

/* adding event listiners to rock paper scissors buttons */

choiceBtns.forEach(function (btn) {
  btn.addEventListener("click", game);
});
