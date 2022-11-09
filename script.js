function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let choice = 
  (randomNum === 0) ? 'rock' :
  (randomNum === 1) ? 'paper' :
  'scissors';
  return(choice);
}

let computerChoice;
let playerChoice;

function playRound(playerChoice, computerChoice) {
  let result;
  if (playerChoice === computerChoice) {
    result = 'Tie!';
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      result = "You Lose! Paper beats Rock";
    } else {
      result = "You Win! Rock beats Scissors";
    };
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = "You Win! Paper beats Rock";
    } else {
      result = "You Lose! Scissors beats Paper";
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = "You Lose! Rock beats Scissors";
    } else {
      result = "You Win! Scissors beats Paper";
    };
  } else {
    return(alert("Incorrect answer"));
  }
  return(result);
}

function game() {
  let result;
  let scorePlayer = 0;
  let scoreBot = 0;
  while ((scorePlayer < 3) && (scoreBot < 3)) {
    computerChoice = getComputerChoice();
    playerChoice = prompt('Your choice?').toLowerCase();
    result = playRound(playerChoice, computerChoice);
    if (result.includes('Win')) scorePlayer++;
    else if (result.includes('Lose')) scoreBot++;
    console.log(result);
    console.log(scorePlayer, scoreBot)
  };
  if (scorePlayer === 3) return(console.log("Player Wins!"));
  else return(console.log("Bot Wins!"));
}