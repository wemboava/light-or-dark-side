import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  /* #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  } */

  body {
    -webkit-font-smoothing: antialiased !important;
    /* font-family: 'Montserrat', sans-serif; */
    color: #555;
    overflow-x: hidden;
  }

  body, input, button {
    font: 16px 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  p, h1, h2 {
    text-align: start;
  }
`;
