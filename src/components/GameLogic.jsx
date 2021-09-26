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

  if (compOption === "scissors" && playerOption === "paper"){
    winner = "computer"
  }

}