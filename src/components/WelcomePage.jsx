import React from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";


const Welcome = () => {
  return (
    <Container>
      <h1 data-cy="header">Welcome To The ROCK, PAPER, SCISSORS Game</h1>
      <Button data-cy="play-button" as={Link} to={{ pathname: "/game" }}>
        Play Game!
      </Button>
    </Container>
  );
};

export default Welcome;
