import React from "react";
import { Container, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container color="red" textAlign="center" padded size="massive" raised>
      <Header data-cy="welcome-header">Lets Play ROCK, PAPER, SCISSORS</Header>
      <Button data-cy="play-button" as={Link} to={{ pathname: "/gamepage" }}>
        Play Game!
      </Button>
    </Container>
  );
};

export default Welcome;
