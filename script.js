"use strict";

const choices = ["rock", "paper", "scissors"];

/* computerPlay */
const computerPlay = function () {
  let choice = choices[Math.floor(Math.random() * 3)];

  return choice;
};

/* playRound */
const playRound = function (playerSel, computerSelection) {
  let playerSelection = playerSel.toLowerCase();

  if (!choices.includes(playerSelection)) {
    return "Unavailable choice";
  }

  if (playerSelection === computerSelection) {
    return `Tie`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! rock beats scissors`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose! rock beats scissors`;
  } else if (
    choices.indexOf(playerSelection) > choices.indexOf(computerSelection)
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

let playerSelection = "Scissors";
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

// console.log(computerPlay(choices, 3));
