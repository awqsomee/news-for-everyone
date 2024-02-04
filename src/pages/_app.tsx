import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";
import localFont from "next/font/local";

export const BebasNeueRegular = localFont({ src: "../fonts/BebasNeue-Regular.ttf" });
export const LatoMedium = localFont({ src: "../fonts/Lato-Medium.ttf" });

const theme = {
  primary: "rgba(1, 28, 39, 1)",
  contrast: "rgba(245, 237, 240, 1)",
};

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.contrast};
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    font-family: ${LatoMedium.style.fontFamily};
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
