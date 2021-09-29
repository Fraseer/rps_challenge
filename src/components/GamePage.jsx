import React, {useState} from "react";
import { Button, Container } from "semantic-ui-react";
// import { gameWinner } from "./GameLogic";

const Game = () => {
  const [playerOption, setPlayerOption] = useState();
  // const [compOption]
  let options = ["rock", "paper", "scissors"];
  let compOption = options[Math.floor(Math.random() * options.length)];
  let winner ;

  const playerDecision = (Option) => {
    setPlayerOption(Option)
    return gameWinner(playerOption)
  };

  const gameWinner = (playerOption) => {
    console.log(compOption);
  
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
  
  return (
    <Container>
      <h1 data-cy="game-header">Game On!</h1>
      <Button data-cy="rock-button" onClick={() => playerDecision("rock")}>
        Rock
      </Button>
      <Button data-cy="paper-button" onClick={() => playerDecision("paper")}>
        Paper
      </Button>
      <Button data-cy="scissors-button" onClick={() => playerDecision("scissors")}>
        Scissors
      </Button>
      <br /> 
      Player: {playerOption} <br />
      Computer: {compOption} <br />
      Result: {gameWinner}
    </Container>
  );
};

export default Game;
