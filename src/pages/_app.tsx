import type { AppProps } from "next/app";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";
import localFont from "next/font/local";
import Head from "next/head";
import favicon from "/public/images/favicon.ico";
import { Center } from "../ui/Center";

export const BebasNeueRegular = localFont({ src: "../fonts/BebasNeue-Regular.ttf" });
export const BebasNeueBook = localFont({ src: "../fonts/BebasNeue-Book.ttf" });
export const LatoMedium = localFont({ src: "../fonts/Lato-Medium.ttf" });
export const LatoSemiBold = localFont({ src: "../fonts/Lato-SemiBold.ttf" });

const theme = {
  primary: "rgba(1, 28, 39, 1)",
  contrast: "rgba(245, 237, 240, 1)",
  secondary: "rgba(167, 158, 183, 1)",
  accent: "rgba(205, 143, 197, 1)",
  green: "rgba(165, 253, 54, 1)",
  red: "rgba(253, 66, 54, 1)",
  grey: "rgba(203, 192, 192, 1)",
};

const GlobalStyles = createGlobalStyle`
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

h1, h2, h3, h4, h5, h6 {
  margin: 0;
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
        <Center>
          <Header />
          <Component {...pageProps} />
        </Center>
      </ThemeProvider>
    </>
  );
}
