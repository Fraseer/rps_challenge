import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";

const Welcome = () => {
  return (
    <div top="20px">
      <Container textAlign="center">
        <h1 className="headers" data-cy="welcome-header">
          Lets Play ROCK, PAPER, SCISSORS
        </h1>
        <a href="https://srossicsrepapkcor.netlify.app/gamepage" className="btn" data-cy="play-button">
          Start Game!
        </a>

         {/* <a as={Link} to={{ pathname: "/gamepage" }} className="btn" data-cy="play-button">
          Start Game!
        </a> */}

        {/* <Button data-cy="play-button" as={Link} to={{ pathname: "/gamepage" }}>
          Start Game!
        </Button> */}
      </Container>
    </div>
  );
};

export default Welcome;
