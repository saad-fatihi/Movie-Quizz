import styled, { css } from "styled-components";
import { Button } from "../../atoms/Button";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SubContainer = css`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;

export const ScoreContainer = styled.div`
  ${SubContainer}
`;

export const InputContainer = styled.div`
  ${SubContainer}
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #7c7c7c;
`;

export const TryButton = styled(Button)`
  background: #7059ff;
`;

export const NameInput = styled.input`
  border: 1px solid #7c7c7c;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 30px 0;
  flex: 1;
`;

export const AddButton = styled(Button)`
  background: #7059ff;
  margin: 30px 0 30px 30px;
`;
