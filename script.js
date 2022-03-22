"use strict";

const choices = ["rock", "paper", "scissors"];

const computerPlay = function (choices, numberOfChoices) {
  let choice = choices[Math.floor(Math.random() * numberOfChoices)];

  return choice;
};

console.log(computerPlay(choices, 3));
