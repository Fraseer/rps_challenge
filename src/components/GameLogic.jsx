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
  console.log(compOption);
  let winner;

  if (compOption === "rock" && playerOption === "scissors") {
    winner = "computer wins";
  } else if (compOption === "paper" && playerOption === "rock") {
    winner = "computer wins";
  } else if (compOption === "scissors" && playerOption === "paper") {
    winner = "computer wins";
  } else if (compOption === "rock" && playerOption === "paper") {
    winner = "player wins";
  } else if (compOption === "paper" && playerOption === "scissors") {
    winner = "player wins";
  } else if (compOption === "scissors" && playerOption === "rock") {
    winner = "player wins";
  } else if (compOption === playerOption) {
    winner = "draw";
  }
  console.log(winner)
  return winner;
};

export { gameWinner };
