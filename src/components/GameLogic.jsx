// const computerChoice = () => {
//   let compResult;
//   let compChoice = Math.floor(Math.random() * 3)

//   if (compChoice == 0) {
//     compResult = "rock"
//   } else if (compChoice == 1) {
//     compResult = "paper"
//   } else if (compChoice == 2) {
//     compResult = "scissors"
//   }
//   return compResult
// }

const gameWinner = (playerOption) => {
  let options = ["rock", "paper", "scissors"];
  var compOption = options[Math.floor(Math.random() * options.length)];
  console.log(compOption)
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

export default {gameWinner}