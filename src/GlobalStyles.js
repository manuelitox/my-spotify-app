import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, 
  *:after, 
  *:before {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-family: 'fira sans', sans-serif;
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    margin: 0;
  }
  button {
    cursor: pointer;
    font-size: 1.5rem;
    font-family: 'fira sans', sans-serif;
  }
  a {
    text-decoration: none;
  }  
  input {
    color: ${ props => props.theme.blueDark };
    font-family: 'fira sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    width: 100%;
  }
`;

export default GlobalStyles