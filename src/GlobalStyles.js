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
    &.fixed {
      position: fixed;
      width: 100%;
      &:before {
        background-color: rgba(0,0,0,.7);
        content: '';
        height: 100%;
        left: 0;
        min-height: 100vh;
        top: 0;
        position: absolute;
        width: 100%;
        z-index: 4;
      }
    }
    &.disable-albums-list-popup .albums-list-popup {
      overflow: hidden;
    }
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