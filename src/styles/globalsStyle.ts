import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'HelveticaRegular';
	  src: url('../fonts/HelveticaNowDisplay-Regular.woff2');
    //font-weight: 700;
    font-display: swap;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
      U+2212, U+2215, U+FEFF, U+FFFD;
	}

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{ 
    min-height: 100%;
    background-image: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    font-size: 62.5%; // 10px
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'HelveticaRegular', -apple-system, system-ui, sans-serif;
  }
  ul {
    list-style: none;
  }

  button{
      cursor: pointer;
  }

  @media (max-width: 1080px){
      html{
          //font-size: 63.75% // 15px
      }
  }

  @media (max-width: 720px){
    html{
        //font-size: 87.5% // 14px
    }
  }

`