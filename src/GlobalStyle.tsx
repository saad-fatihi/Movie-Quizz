import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      font-family: sans-serif;
    }

    body {
        box-sizing: border-box;
        background-color: #F5F6FA;
        margin: 0;
    }
`;

export default GlobalStyle;
