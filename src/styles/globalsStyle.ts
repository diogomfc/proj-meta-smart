import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{ 
    min-height: 100%;
    background:${props => props.theme.colors.primary};
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Helvetica Now Display', -apple-system, system-ui, sans-serif;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
`