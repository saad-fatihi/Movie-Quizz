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

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #7c7c7c;
  margin: 30px;
  text-align: center;
`;

export const PlayButton = styled(Button)`
  background: #7059ff;
`;
