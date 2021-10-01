import React, { useState } from "react";
import { Container, Image, Card } from "semantic-ui-react";
import paper from "../images/paper.png";
import rock from "../images/rock.png";
import scissors from "../images/scissors.png";

const Game = () => {
  const [playerOption, setPlayerOption] = useState();
  const [compOption, setCompOption] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  let options = ["Rock", "Paper", "Scissors"];

  const playGame = (Option) => {
    randomChoice();
    playerDecision(Option);
    scoreCard();
  };

  const randomChoice = () => {
    setCompOption(options[Math.floor(Math.random() * options.length)]);
  };

  const playerDecision = (Option) => {
    setPlayerOption(Option);
  };

  const gameWinner = () => {
    let winner;
    if (compOption === "Rock" && playerOption === "Scissors") {
      winner = "Computer Wins!";
    } else if (compOption === "Paper" && playerOption === "Rock") {
      winner = "Computer Wins!";
    } else if (compOption === "Scissors" && playerOption === "Paper") {
      winner = "Computer Wins!";
    } else if (compOption === "Rock" && playerOption === "Paper") {
      winner = "Player Wins!";
    } else if (compOption === "Paper" && playerOption === "Scissors") {
      winner = "Player Wins!";
    } else if (compOption === "Scissors" && playerOption === "Rock") {
      winner = "Player Wins!";
    } else if (compOption === playerOption) {
      winner = "It's a draw!";
    }
    return winner;
  };

  const scoreCard = () => {
    if (gameWinner(playerOption) === "Player Wins!") {
      setPlayerScore(playerScore + 1);
      return playerScore;
    } else if (gameWinner(playerOption) === "Computer Wins!") {
      setComputerScore(computerScore + 1);
      return computerScore;
    }
  };

  return (
    <Container textAlign="center">
      <h1 className="headers" data-cy="game-header">
        Game On!
      </h1>
      <div className="score-cards">
        <div className="player-s-c">
          <Card data-cy="player-score-card" centered raised>
            <br />
            <li>Player Score Card</li> <br />
            <li>Score : {playerScore}</li>
            <br />
          </Card>
        </div>
        <div className="comp-s-c">
          <Card data-cy="computer-score-card" centered raised>
            <br />
            <li>Computer Score Card</li> <br />
            <li>{computerScore} : Score </li> <br />
          </Card>
        </div>
      </div>
      <button data-cy="rock-button" onClick={() => playGame("Rock")}>
        <Image src={rock} size="medium"></Image>
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
      <button data-cy="paper-button" onClick={() => playGame("Paper")}>
        <Image
          src={paper}
          // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREALCV4PXDrTnrpHs-pQEkNG5HYqMod6i7zg&usqp=CAU
          size="medium"
        ></Image>
      </button>
      <button data-cy="scissors-button" onClick={() => playGame("Scissors")}>
        <Image src={scissors} size="medium"></Image>
      </button>
    </Container>
  );
};

export default Game;
