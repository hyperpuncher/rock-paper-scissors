function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let choice;
  (randomNum === 0) ? choice = 'Rock' :
  (randomNum === 1) ? choice = 'Paper' :
  choice = 'Scissors';
  return(choice);
}