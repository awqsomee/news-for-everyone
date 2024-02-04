import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}
`;

const theme = {
  contrast: "rgba(245, 237, 240, 1)",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
