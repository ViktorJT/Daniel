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
    z-index: 10;
    width: 100%;
    max-width: var(--containerWidth);
    padding: 20px;

    @media (min-width: 970px) {
      padding: 0 40px;
    }

    span {
      display: block;
      max-width: 640px;
    }
  }

`;

export const StyledMarquee = styled(Marquee)`
  overflow: hidden;

  position: absolute !important;
  left: 0;
`;

export const StyledMedia = styled.div`
  margin-right: var(--gap);
  width: 50vw;
  height: auto;

  transition: all 0.3s;
  filter: grayscale(0%);

  &:hover {
    cursor: pointer;
    filter: grayscale(80%);

    .meta {
      top: 0;
      opacity: 1;
    }
  }

  .wrapper {
    background-color: var(--primary-shade);
  }

  .meta {
    top: 16px;
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }

  @media (max-width: 970px) {
    width: 100vw;
    margin-right: 16px;
  }
`;
