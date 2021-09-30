import React, { useState } from "react";
import { Container, ls, Image, Card } from "semantic-ui-react";

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
    <Container textAlign="center">
      <h1 data-cy="game-header">Game On!</h1>
      <button data-cy="rock-button" onClick={() => playerDecision("rock")}>
        <Image
          src="https://image.shutterstock.com/image-vector/pile-boulders-rocks-260nw-60307183.jpg"
          size="small"
        ></Image>
      </button>
      <Card centered raised>
        <ul>
          <br />
          <li data-cy="player-option" size="large">
            {" "}
            Player: {playerOption}{" "}
          </li>{" "}
          <br />
          <li data-cy="computer-option" size="large">
            Computer: {compOption}
          </li>{" "}
          <br />
          <li data-cy="result" size="large">
            Result: {gameWinner(playerOption)}
          </li>{" "}
          <br />
        </ul>
      </Card>
      <button data-cy="paper-button" onClick={() => playerDecision("paper")}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREALCV4PXDrTnrpHs-pQEkNG5HYqMod6i7zg&usqp=CAU"
          size="small"
        ></Image>
      </button>
      <button
        data-cy="scissors-button"
        onClick={() => playerDecision("scissors")}
      >
        <Image
          src="https://img1.pnghut.com/3/13/3/DxggERCLCj/scissors-haircutting-shears-cutting.jpg"
          size="small"
        ></Image>
      </button>
    </Container>
  );
};

export default Game;
