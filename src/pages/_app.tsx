import type { AppProps } from "next/app";
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

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <Navigation theme={theme} setTheme={setTheme} />
        <Component theme={theme} {...pageProps} />
        <Footer contacts={pageProps.contacts} />
      </StyledLayout>
    </>
  );
}

export default MyApp;
