function getComputerChoice() {
  let arrRandom = ["rock", "paper", "scissors"]
  let pick = arrRandom[Math.floor((Math.random()) * 3)]
  return pick;
}


function playGame(playerLow, computerLow) {
  playerLow = playerLow.toLowerCase();
  console.log(playerLow);
  console.log(computerLow);
  let winner = (playerLow === computerLow) ? "Tie!" : (playerLow === "rock" && computerLow === 
  "scissors") ? "You win!" : (playerLow === "paper" && computerLow === "rock") ? "You win!" : 
  (playerLow === "scissors" && computerLow === "paper") ? "You win!" : "You lose!"
  return winner;
}


let buttons = document.querySelectorAll(".button");
let human_div = document.querySelector(".humanScore");
let computer_div = document.querySelector(".computerScore");
let content = document.querySelector(".content");
let gameOver = false;
let winner = ""
let playerSelection = ""
let humanPoints = 0;
let computerPoints = 0;

human_div.innerHTML = `0`;
computer_div.innerHTML = `0`;
content.innerHTML = "No round has been played yet!";

console.log("Please Click a box: ")

for (const button of buttons) {
button.addEventListener("click", function onClick() {
  if (gameOver === false) {
    playerSelection = button.textContent;
    console.log("Box Clicked");
    winner = playGame(playerSelection, getComputerChoice());
    console.log(winner)
    if (winner === "You win!") {
      content.innerHTML = `${winner}`;
      humanPoints++;
    }
    else if (winner === "You lose!") {
      content.innerHTML = `${winner}`;
      computerPoints++;
    }
    else {
      content.innerHTML = `${winner}`;
    }
    console.log("Human: " + humanPoints);
    console.log("Computer: " + computerPoints);
    human_div.innerHTML = `${humanPoints}`;
    computer_div.innerHTML = `${computerPoints}`;
    //Checking gameOver Variable to see if one side has reached five points, update text to show that the game is over if one side has won.
    if (computerPoints === 5 || humanPoints === 5) {
        gameOver = true;
        //Displaying a losing / winning message that will be displayed in "content" based on the scores
        if (computerPoints === 5) {
          content.innerHTML = "You have lost!";
        }
        else {
          content.innerHTML = "You have won!";
        }
    }
  }
})
}