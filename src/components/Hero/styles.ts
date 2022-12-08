import styled from "styled-components";
import Marquee from "react-fast-marquee";

export const StyledMarquee = styled(Marquee)`
  overflow: hidden;
  
  position: absolute !important;
  top: 0;
  left: 0;

  .asset {
    /* margin-right: 40px; */
    width: 60vw;
    height: auto;
  }
`;

export const StyledHero = styled.section`
  margin: 0 auto;
  padding: 0 5%;

  min-height: 100vh;

  display: flex;
  align-items: center;

  h1 {
    position: relative;
    z-index: 10;
    width: 50%;
  }
`;
