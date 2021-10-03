import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";

import { Title } from "../../atoms/Title";
import {
  Container,
  PortraitContainer,
  Portrait,
  YesButton,
  NoButton,
  ButtonContainer,
} from "./Survey.styled";
import { LinearProgressWithLabels } from "../../molecules/LinearProgressWithLabels";
import { Survey as SurveyProps } from "../../../utils/commonTypes";
import { ScoreContext } from "../../../context/scoreContext";

type SurveyState = {
  counter: number;
  score: number;
};

const Survey = ({ data }: SurveyProps) => {
  const history = useHistory();
  const { pushResult } = useContext(ScoreContext);

  const [{ counter, score }, setSurveyState] = useState<SurveyState>({
    counter: 0,
    score: 0,
  });

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const next = () => {
    if (counter < 9) {
      setSurveyState((prevState) => ({
        ...prevState,
        counter: prevState.counter + 1,
        score: prevState.score + 1,
      }));
    } else {
      pushResult({ score: score + 1, seconds });
      history.push("/over");
    }
  };

  const wrongAnswer = () => {
    pushResult({ score: score, seconds });
    history.push("/over");
  };

  const rightAnswer = () => {
    next();
  };
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabels value={score} time={seconds} />
      </Box>
      <Title>Did this actor play in this movie?</Title>
      <PortraitContainer>
        <Portrait
          src={data[counter].actor.image}
          alt={data[counter].actor.name}
        />
        <Portrait
          src={data[counter].movie.image}
          alt={data[counter].movie.title}
        />
      </PortraitContainer>
      <ButtonContainer>
        {data[counter].answer === "YES" && (
          <>
            <NoButton onClick={wrongAnswer}>No</NoButton>
            <YesButton onClick={rightAnswer}>Yes*</YesButton>
          </>
        )}
        {data[counter].answer === "NO" && (
          <>
            <NoButton onClick={rightAnswer}>No*</NoButton>
            <YesButton onClick={wrongAnswer}>Yes</YesButton>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Survey;
