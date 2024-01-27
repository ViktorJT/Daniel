import styled from "styled-components";
import Head from "next/head";

import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import Navigation from "../components/Navigation";

import { StyledLayout, StyledUnderConstruction } from "../styles/layout";

function UnderConstruction() {
  return (
    <StyledUnderConstruction>
      <h1>This page is under construction</h1>
    </StyledUnderConstruction>
  );
}

function MyApp({ Component, pageProps }: any) {
  return process.env.UNDER_CONSTRUCTION === "true" ? (
    <UnderConstruction />
  ) : (
    <>
      <Head>
        <title>Daniel Arfwedson</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <GlobalStyles />
      <StyledLayout>
        <Navigation />
        <Component {...pageProps} />
      </StyledLayout>
    </>
  );
}

export default MyApp;
