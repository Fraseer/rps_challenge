import React, { useState } from "react";
import { Button, Container, List } from "semantic-ui-react";

const Game = () => {
  const [playerOption, setPlayerOption] = useState();
  let options = ["rock", "paper", "scissors"];
  let compOption = options[Math.floor(Math.random() * options.length)];
  
  const playerDecision = (Option) => {
    setPlayerOption(Option);
    return gameWinner(playerOption);
  };
  
  const gameWinner = () => {
    let winner;
    if (compOption === "rock" && playerOption === "scissors") {
      winner = "Computer Wins!";
    } else if (compOption === "paper" && playerOption === "rock") {
      winner = "Computer Wins!";
    } else if (compOption === "scissors" && playerOption === "paper") {
      winner = "Computer Wins!";
    } else if (compOption === "rock" && playerOption === "paper") {
      winner = "Player Wins!";
    } else if (compOption === "paper" && playerOption === "scissors") {
      winner = "Player Wins!";
    } else if (compOption === "scissors" && playerOption === "rock") {
      winner = "Player Wins!";
    } else if (compOption === playerOption) {
      winner = "It's a draw!";
    }
    return [winner];
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
      <Button
        data-cy="scissors-button"
        onClick={() => playerDecision("scissors")}
      >
        Scissors
      </Button>
      <List>
        <List.Item data-cy="player-option"> Player: {playerOption} </List.Item>
        <List.Item data-cy="computer-option"> Computer: {compOption} </List.Item>
        <List.Item data-cy="result"> Result: {gameWinner(playerOption)}</List.Item>
      </List>
    </Container>
  );
};

export default Game;
