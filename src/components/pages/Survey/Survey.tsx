import React from "react";
import { Title } from "../../atoms/Title";
import {
  Container,
  PortraitContainer,
  Portrait,
  YesButton,
  NoButton,
  ButtonContainer,
} from "./Survey.styled";
import Box from "@mui/material/Box";
import { LinearProgressWithLabels } from "../../molecules/LinearProgressWithLabels";

const Survey = () => {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabels value={50} time={35} />
      </Box>
      <Title>Did this actor play in this movie?</Title>
      <PortraitContainer>
        <Portrait src="https://picsum.photos/id/237/270/360" alt="portrait" />
        <Portrait src="https://picsum.photos/id/237/270/360" alt="portrait" />
      </PortraitContainer>
      <ButtonContainer>
        <NoButton>No</NoButton>
        <YesButton>Yes</YesButton>
      </ButtonContainer>
    </Container>
  );
};

export default Survey;
