import type { AppProps } from "next/app";
import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import Navigation from "../components/Navigation/html";

const StyledLayout = styled.main`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <Navigation theme={theme} setTheme={setTheme} />
        <Component theme={theme} {...pageProps} />
      </StyledLayout>
    </>
  );
}

export default MyApp;
