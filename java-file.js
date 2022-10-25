

function getComputerChoice() {
    let arrRandom = ["Rock", "Paper", "Scissors"]
    let pick = arrRandom[Math.floor((Math.random()) * 3)]
    return pick;
  }
  
  function playGame(playerSelection, computerSelection) {
    playerLow = playerSelection.toLowerCase()
    computerLow = computerSelection.toLowerCase()
    // If you tie with the machine, the score returned will be zero, if you win, it will be one, and if you lose, it will be negative one.
    let winner = (playerLow === computerLow) ? 0 : (playerLow === "rock" && computerLow === 
    "scissors") ? 1 : (playerLow === "paper" && computerLow === "rock") ? 1 : 
    (playerLow === "scissors" && computerLow === "paper") ? 1 : -1
    return winner
  }
  
  function game () {
    // Array that will be keeping track of wins/losses through each round
    let champ = []

    // Loop that will actually play the game and grab a winner for each round
    for (i = 0; i < 5; i++) {
      let playerSelection = prompt("Rock, Paper, or Scissors?");
      let winner = playGame(playerSelection, getComputerChoice());
      champ.push(winner);
      }
      
    // Loop iteration in order to determine how many round the player won out of the five played
    sum = 0;
    for (i = 0; i < 5; i++) {
        if (champ[i] === 1) {
            sum += 1;
        }
    }
    
    // Telling the player how many rounds he/she won out of five
    console.log(`You won ${sum} games out of five!`);
  }
  
  game()
