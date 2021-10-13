import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{ 
    min-height: 100%;
    //background:${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary};
    background-image: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Helvetica Now Display', -apple-system, system-ui, sans-serif;
  }
  ul {
    list-style: none;
    //padding-left: 0;
  }

  h1{
    font-size: 2rem;
  }

  h2{
      font-size: 1.5rem;
  }

  button{
      cursor: pointer;
  }

  @media (max-width: 1080px){
      html{
          font-size: 93.75% // 15px
      }
  }

  @media (max-width: 720px){
    html{
        font-size: 87.5% // 14px
    }
  }

`