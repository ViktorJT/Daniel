import type { AppProps } from "next/app";
import styled from "styled-components";
import Footer from "../components/Footer/html";
import GlobalStyles from "../components/GlobalStyles";
import Navigation from "../components/Navigation/html";

const StyledLayout = styled.main`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <StyledLayout>
        <Navigation />
        <Component {...pageProps} />
        <Footer contacts={pageProps.contacts || []}/>
      </StyledLayout>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
