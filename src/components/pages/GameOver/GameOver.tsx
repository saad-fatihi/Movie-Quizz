import React from "react";
import { Title } from "../../atoms/Title";
import {
  Container,
  TryButton,
  AddButton,
  InputContainer,
  NameInput,
  ScoreContainer,
  Label,
} from "./GameOver.styled";

const GameOver = () => {
  return (
    <Container>
      <Title>Game over</Title>
      <ScoreContainer>
        <Label>Time spent in the game</Label>
        <Label>15 s</Label>
      </ScoreContainer>
      <ScoreContainer>
        <Label>Good answers</Label>
        <Label>10 good answers</Label>
      </ScoreContainer>
      <TryButton>Try again</TryButton>
      <Title>Highscore</Title>
      <ScoreContainer>
        <Label>Lorem ipsum</Label>
        <Label>15 s</Label>
        <Label>10 good answers</Label>
      </ScoreContainer>
      <ScoreContainer>
        <Label>Lorem ipsum</Label>
        <Label>15 s</Label>
        <Label>10 good answers</Label>
      </ScoreContainer>
      <InputContainer>
        <NameInput />
        <AddButton>Add</AddButton>
      </InputContainer>
    </Container>
  );
};

export default GameOver;
