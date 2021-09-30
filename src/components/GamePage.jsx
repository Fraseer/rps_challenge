import React, { useState } from "react";
import { Button, Container, List, Segment } from "semantic-ui-react";

const Game = () => {
  const [playerOption, setPlayerOption] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

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

  // const scoreCard = () => {
  //   if (gameWinner === "Player Wins!") {
  //     setPlayerScore(playerScore + 1);
  //     return setPlayerScore;
  //   } else if (gameWinner === "Computer Wins!") {
  //     setComputerScore(playerScore + 1);
  //     return setComputerScore;
  //   } else if (gameWinner === "Its a draw!") {
  //   }
  // };

  const scoreCard = () => {
    setPlayerScore(playerScore + 1);
    return setPlayerScore;
  };

  return (
    <Container>
      <h1 data-cy="game-header">Game On!</h1>
      <Segment data-cy="player-score-card">
        Player Score Card <br />
        Score : {playerScore}
        <button onClick={() => scoreCard(playerScore + 1)}>Click me</button>
      </Segment>
      <Segment data-cy="computer-score-card" textAlign="right">
        Computer Score Card
        <br /> {computerScore} : Score
      </Segment>
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
        <List.Item data-cy="computer-option">
          {" "}
          Computer: {compOption}{" "}
        </List.Item>
        <List.Item data-cy="result">
          {" "}
          Result: {gameWinner(playerOption)}
        </List.Item>
      </List>
    </Container>
  );
};

export default Game;
