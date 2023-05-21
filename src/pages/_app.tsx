import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import Navigation from "../components/Navigation";

const StyledLayout = styled.main`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`;

const StyledUnderConstruction = styled.section`
  height: 100vh;
  height: 100svh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

function UnderConstruction() {
  return (
    <StyledUnderConstruction><h1>This page is under construction</h1></StyledUnderConstruction>
  )
}

function MyApp({ Component, pageProps }: any) {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Head>
        <title>Daniel Arfwedson</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <GlobalStyles />
      <StyledLayout>
        <Navigation theme={theme} setTheme={setTheme} />
        <Component theme={theme} {...pageProps} />
        <Footer contacts={pageProps.contacts || []} />
      </StyledLayout>
    </>
  );
}

export default MyApp;
