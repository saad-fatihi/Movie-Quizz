import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { ScoreContext } from "../../../context/scoreContext";
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
  const history = useHistory();
  const { result, results, saveResult } = useContext(ScoreContext);
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(true);

  return (
    <Container>
      {result && (
        <>
          <Title>{result.score === 10 ? "Well done" : "Game over"}</Title>
          <ScoreContainer>
            <Label>Time spent in the game</Label>
            <Label>{`${result.seconds} s`}</Label>
          </ScoreContainer>
          <ScoreContainer>
            <Label>Good answers</Label>
            <Label>{`${result.score} good answer(s)`}</Label>
          </ScoreContainer>
        </>
      )}

      <TryButton onClick={() => history.push("/survey")}>Try again</TryButton>
      {results.length > 0 && <Title>Highscore</Title>}
      {results.slice(0, 10).map((r, index) => (
        <ScoreContainer key={index}>
          <Label>{r.name}</Label>
          <Label>{`${r.seconds} s`}</Label>
          <Label>{`${r.score} good answer(s)`}</Label>
        </ScoreContainer>
      ))}

      {display && result && (
        <>
          <InputContainer>
            <NameInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <AddButton
              disabled={input.length === 0}
              onClick={() => {
                saveResult({ ...result, name: input });
                setInput("");
                setDisplay(false);
              }}
            >
              Add
            </AddButton>
          </InputContainer>
        </>
      )}
    </Container>
  );
};

export default GameOver;
