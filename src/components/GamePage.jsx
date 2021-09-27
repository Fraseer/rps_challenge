import React from "react";
import { Button, Container } from "semantic-ui-react";
import { gameWinner } from "./GameLogic";

const Game = () => {
  const playerChoice = (choice) => {
    return gameWinner(choice)
  } 

  return (
    <Container>
      <h1 data-cy="game-header">Game On!</h1>
      <Button data-cy="rock-button" onClick={() => playerChoice("rock")}>
        Rock
      </Button>
      <Button data-cy="paper-button" onClick={() => playerChoice("paper")}>
        Paper
      </Button>
      <Button data-cy="scissors-button" onClick={() => playerChoice("scissors")}>
        Scissors
      </Button>
      <h1>{playerChoice()}</h1>
    </Container>
  );
};

export default Game;
