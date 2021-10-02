import React from "react";
import { Title } from "../../atoms/Title";
import { Container, Description, PlayButton } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <Title data-testid="home-title">Ready to play?</Title>
      <Description data-testid="home-desc">
        Be the best in finding the perfect pairing between actors and movies.
        Press play and let’s have some fun!
      </Description>
      <PlayButton to="/survey">Press play and let’s go</PlayButton>
    </Container>
  );
};

export default Home;
