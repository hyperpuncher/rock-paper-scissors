const btns = document.querySelectorAll("button");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score");
const buttonsContainer = document.querySelector(".buttons")
const restartBtn = document.querySelector("#restart");
let result;
let scorePlayer = 0;
let scoreBot = 0;

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    result = playRound(playerChoice, getComputerChoice());
    
    if (result.includes('Win')) scorePlayer++;
    else if (result.includes('Lose')) scoreBot++;
    
    winner.textContent = result;
    score.textContent = `Player ${scorePlayer}:${scoreBot} Bot`
    
    if (scorePlayer === 3 || scoreBot === 3) {
      btns.forEach(btn => {
        btn.style.display = 'none';
      })
      restartBtn.style.display = 'inline-block';
      
      if (scorePlayer === 3) winner.textContent = 'Player Wins!'
      else winner.textContent = 'Bot Wins!'
    }
  })
});


function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let choice = 
  (randomNum === 0) ? 'rock' :
  (randomNum === 1) ? 'paper' :
  'scissors';
  return(choice);
}


function playRound(playerChoice, computerChoice) {
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
  }
  return(result);
}
