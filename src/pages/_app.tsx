import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";
import localFont from "next/font/local";
import Head from "next/head";
import favicon from "/public/images/favicon.ico";

export const BebasNeueRegular = localFont({ src: "../fonts/BebasNeue-Regular.ttf" });
export const LatoMedium = localFont({ src: "../fonts/Lato-Medium.ttf" });

const theme = {
  primary: "rgba(1, 28, 39, 1)",
  contrast: "rgba(245, 237, 240, 1)",
  secondary: "rgba(167, 158, 183, 1)",
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
    <>
      <Head>
        <title>Новости для каждого</title>
        <link rel="shortcut icon" href={favicon.src} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
