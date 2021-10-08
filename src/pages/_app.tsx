import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalsStyle";

//TEMAS
import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
