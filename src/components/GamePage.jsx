import React, { useState } from "react";
import { Container, Image, Card, Segment } from "semantic-ui-react";

const Game = () => {
  const [playerOption, setPlayerOption] = useState();
  const [compOption, setCompOption] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  let options = ["Rock", "Paper", "Scissors"];

  const playGame = (Option) => {
    randomChoice()
    playerDecision(Option)
  }

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

  // const scoreCard = () => {
  //   // let result = "banana";
  //   // return result;
  //   if (gameWinner(playerOption) === "Player Wins!") {
  //     setPlayerScore(playerScore + 1);
  //     return playerScore;
  //   } else if (gameWinner(playerOption) === "Computer Wins!") {
  //     setComputerScore(computerScore + 1);
  //     return computerScore;
  //   }
  // };


  // useEffect(() => {
  //   if (gameWinner(playerOption) === "Player Wins!") {
  //     setPlayerScore(playerScore + 1);
  //     return playerScore;
  //   } else if (gameWinner(playerOption) === "Computer Wins!") {
  //     setComputerScore(computerScore + 1);
  //     return computerScore;
  //   }
  // }, []);

  return (
    <Container textAlign="center">
      <h1 class="headers" data-cy="game-header">
        Game On!
      </h1>
      <Segment data-cy="player-score-card" textAlign="left">
        Player Score Card <br />
        Score : {playerScore}
        {/* <button onClick={() => scoreCard(playerScore + 1)}>Click me</button> */}
      </Segment>
      <Segment data-cy="computer-score-card" textAlign="right">
        Computer Score Card
        <br /> {computerScore} : Score
      </Segment>
      <button data-cy="rock-button" onClick={() => playGame("Rock")}>
        <Image
          src="https://image.shutterstock.com/image-vector/pile-boulders-rocks-260nw-60307183.jpg"
          size="medium"
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
      <button data-cy="paper-button" onClick={() => playGame("Paper")}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREALCV4PXDrTnrpHs-pQEkNG5HYqMod6i7zg&usqp=CAU"
          size="medium"
        ></Image>
      </button>
      <button
        data-cy="scissors-button"
        onClick={() => playGame("Scissors")}
      >
        <Image
          src="https://img1.pnghut.com/3/13/3/DxggERCLCj/scissors-haircutting-shears-cutting.jpg"
          size="medium"
        ></Image>
      </button>
    </Container>
  );
};

export default Game;
