import styled from "styled-components";
import Marquee from "react-fast-marquee";

export const StyledHero = styled.section`
  margin: 0 auto;
  width: 100%;

  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    pointer-events: none;
    z-index: 10;
    width: 100%;
    padding: 2vw;

    @media (min-width: 970px) {
      padding: 0 5vw;
    }

    span {
      line-height: 100%;
      display: block;
      max-width: 640px;
    }
  }

`;

export const StyledMarquee = styled(Marquee)`
  overflow: hidden;

  position: absolute !important;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .child {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledMedia = styled.div`
  position: relative;
  margin-right: var(--gap);
  width: 72vw;
  height: auto;

  transition: all 0.3s;
  filter: grayscale(0%);

  &:hover {
    cursor: pointer;
    filter: grayscale(80%);

    .meta {
      bottom: -32px;
      opacity: 1;
    }
  }

  .wrapper {
    background-color: var(--primary-shade);
  }

  .meta {
    position: absolute;
    width: 100%;
    bottom: -54px;
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }

  @media (max-width: 970px) {
    width: 160vw;
    margin-right: 16px;
  }
`;
