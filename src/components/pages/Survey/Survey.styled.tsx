import styled from "styled-components";
import { Button } from "../../atoms/Button";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Portrait = styled.img`
  height: 324px;
  width: 243px;
  margin: 30px 15px;
  border-radius: 12px;
`;

export const PortraitContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const YesButton = styled(Button)`
  background: #2aeb49;
  width: 243px;
  margin: 30px 15px;
`;

export const NoButton = styled(Button)`
  background: #ff5959;
  width: 243px;
  margin: 30px 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
