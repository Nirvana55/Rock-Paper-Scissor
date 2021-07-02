//We need all the data attribute
//RULES Rock wins scissor scissor wins paper paper wins rock
//need to update the score table
//need to display what house choosed and player choosed

import rock from "../images/icon-*.svg";

const allBtn = document.querySelectorAll(".choose");

//getting Attribute Value
let choice = ["rock", "paper", "scissors"];

const mainTag = document.getElementsByClassName("game__BTN");
const winner = document.getElementsByClassName("game");
const resetBTN = document.getElementById("btn__reset");
const winnerMessage = document.getElementById("win");
const userPick = document.getElementById("youPicked");
const housePick = document.getElementById("computerSelect");

const WIN = "You WIN";
const LOOSE = "House WIN";
const DRAW = "draw";

const scoreBoard = document.getElementById("scoreNumber");

let gameStarted = false;
let score = 0;
let userChoice = undefined;

//when btn is clicked value should be pass
allBtn.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    userChoice = buttons.getAttribute("data-choose");
    gameStart();
  });
});

//need to make computer select
function houseSelection() {
  return choice[Math.floor(Math.random() * choice.length)];
}

//need to make game rule
function gameRule(playerSelected, houseSelected) {
  updateSelection(userPick, userChoice);
  updateSelection(housePick, houseSelected);

  if (playerSelected === houseSelected) {
    displayGame();
    return (winnerMessage.innerHTML = DRAW);
  }

  if (
    (playerSelected === "rock" && houseSelected === "scissors") ||
    (playerSelected === "paper" && houseSelected === "rock") ||
    (playerSelected === "scissors" && houseSelected === "paper")
  ) {
    updateScore(1);
    displayGame();
    return (winnerMessage.innerHTML = WIN);
  }
  updateScore(-1);
  displayGame();
  return (winnerMessage.innerHTML = LOOSE);
}

function displayGame() {
  //to show the winner
  //to hide the main tag and show the winner division from html
  mainTag[0].style = "display: none";
  winner[0].style = "display:flex";
}

//need to start game
function gameStart() {
  gameStarted = true;
  let pSelected = userChoice;
  let hSelected = houseSelection();
  gameRule(pSelected, hSelected);
}

//updating a score
function updateScore(value) {
  score += value;
  scoreBoard.innerHTML = score;
}

//need to show who won by displaying the winner and house picked

resetBTN.addEventListener("click", () => {
  winner[0].style = "display:none";
  mainTag[0].style = "display:flex";
});

function updateSelection(selectionRem, choice) {
  selectionRem.classList.remove("paper");
  selectionRem.classList.remove("scissors");
  selectionRem.classList.remove("rock");

  const img = selectionRem.querySelector("img");
  selectionRem.classList.add(`${choice}`);
  img.src = rock[`${choice}`];
  console.log(img.src);
  img.alt = `${choice}`;
}
