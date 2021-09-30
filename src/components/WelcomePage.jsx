import React from "react";
import { Container } from "semantic-ui-react";

const Welcome = () => {
  return (
    <div top="20px">
    <Container textAlign="center">
      <h1 className="headers" data-cy="welcome-header">
        Lets Play ROCK, PAPER, SCISSORS
      </h1>
      <a href="/gamepage" className="btn" data-cy="play-button">
        Start Game!
      </a>
    </Container>
    </div>
  );
};

export default Welcome;
