import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: #f2f2f2;
    color: #000;
    height: 100%;
    font-family: 'cursive'
  }
  html {
    height: 100%;
  }
  h1,h2,h3 {
    font-family: 'Exo', sans-serif;
  }
`;

export { GlobalStyles };
