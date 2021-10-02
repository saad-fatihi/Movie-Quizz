import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  width: 40vw;
  min-width: 300px;
  margin: 100px;
  padding: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: none;
    border: 3px solid #19a0fc;
  }
`;
