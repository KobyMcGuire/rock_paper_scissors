

function getComputerChoice() {
    let arrRandom = ["Rock", "Paper", "Scissors"]
    let pick = arrRandom[Math.floor((Math.random()) * 3)]
    return pick;
  }
  
  function playGame(playerSelection, computerSelection) {
    playerLow = playerSelection.toLowerCase()
    computerLow = computerSelection.toLowerCase()
    let winner = (playerLow === computerLow) ? "Tie!" : (playerLow === "rock" && computerLow === 
    "scissors") ? "You Win!" : (playerLow === "paper" && computerLow === "rock") ? "You win!" : 
    (playerLow === "scissors" && computerLow === "paper") ? "You win!" : "You lose!"
    return winner
  }
  
  function game () {
  for (i = 0; i < 5; i++) {
      let playerSelection = prompt("Rock, Paper, or Scissors?")
      let winner = playGame(playerSelection, getComputerChoice())
    console.log(winner)
      }
  }
  
  game()
