import { Router } from "next/dist/client/router";
//Conexao com db de testes do firebase
//import "../services/firebase";
import { AuthContextProvider } from "../contexts/AuthContext";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalsStyle";

//TEMAS
import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 300,
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContextProvider>
      <style global jsx>
        {`
          #nprogress {
            position: relative;
            z-index: 9999999;
          }
          #nprogress .bar {
            background: #dd4545
              linear-gradient(
                to right,
                #dd4545,
                #338ae8,
                #14aa4b,
                #7cb342,
                #00897b
              ) !important;
            height: 3px;
          }
        `}
      </style>
    </>
  );
}
