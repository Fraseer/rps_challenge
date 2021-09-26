const computerChoice = () => {
  let compResult;
  let compChoice = Math.floor(Math.random() * 3)

  if (compChoice == 0) {
    compResult = "rock"
  } else if (compChoice == 1) {
    compResult = "paper"
  } else if (compChoice == 2) {
    compResult = "scissors"
  }
  return compResult
}

const gameWinner = (computerChoice, playerChoice) => {
  let compOption = computerChoice
  let playerOption = playerChoice
  let winner

  if (compOption === "rock" && playerOption === "scissors"){
    winner = "computer"
  } else if (compOption === "paper" && playerOption === "rock"){
    winner = "computer"
  } else if (compOption === "scissors" && playerOption === "paper" ){
    winner = "computer"
  } else  if (compOption === "rock" && playerOption === "paper"){
    winner = "player"
  } else if (compOption === "paper" && playerOption === "scissors"){
    winner = "player"
  } else if (compOption === "scissors" && playerOption === "rock" ){
    winner = "player"
  } else if (compOption === playerOption){
    winner = "draw"
  }
  return winner
}

export default {gameWinner, computerChoice}