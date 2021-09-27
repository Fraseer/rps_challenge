import React from "react";
import { Button, Container } from "semantic-ui-react";
import { gameWinner } from "./components/GameLogic";

const Game = () => {
  return (
    <Container>
      <h1 data-cy="game-header">Game On!</h1>
      <Button data-cy="rock-button">Rock</Button>
      <Button data-cy="paper-button">Paper</Button>
      <Button data-cy="scissors-button">Scissors</Button>
    </Container>
  );
};



export default Game;
