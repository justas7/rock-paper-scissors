"use strict";

const choices = ["rock", "paper", "scissors"];
let winner;

const firstLetterUpperCase = function (word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
};

/* computerPlay */
const computerPlay = function () {
  let choice = choices[Math.floor(Math.random() * 3)];

  return choice;
};

/* playRound */
const playRound = function (playerSel, computerSelection) {
  let playerSelection = playerSel.toLowerCase();

  if (!choices.includes(playerSelection)) {
    return (winner = "Unavailable choise");
  }

  if (playerSelection === computerSelection) {
    winner = "tie";
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    winner = "player";
    return "Player | Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    winner = "computer";
    return " Computer | Rock beats scissors";
  } else if (
    choices.indexOf(playerSelection) > choices.indexOf(computerSelection)
  ) {
    winner = "player";
    return `Player | ${firstLetterUpperCase(
      playerSelection
    )} beats ${firstLetterUpperCase(computerSelection)}`;
  } else {
    winner = "computer";
    return `Computer | ${firstLetterUpperCase(
      computerSelection
    )} beats ${firstLetterUpperCase(playerSelection)} `;
  }
};

/* Game */
const game = function () {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    console.log(playRound(prompt("Rock, paper, scissors?"), computerPlay()));

    if (winner === "player") {
      playerWins++;
    } else if (winner === "computer") {
      computerWins++;
    }
  }

  if (playerWins == computerWins) {
    return `Tie\nPlayer: ${playerWins} | Computer: ${computerWins}`;
  } else if (playerWins > computerWins) {
    return `You won!\nPlayer: ${playerWins} | Computer: ${computerWins}`;
  } else return `You lost!\nPlayer: ${playerWins} | Computer: ${computerWins}`;
};

console.log(game());

// console.log(computerPlay(choices, 3));
