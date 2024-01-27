import styled from "styled-components";

export const StyledIntro = styled.section`
  div {
    margin: 0 auto;
    padding: 80px 5vw;
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;

    h2 {
      flex: 1 1 560px;
      line-height: 1.16;
    }

    ul {
      flex: 1 1 33%;
      display: inherit;
      flex-flow: inherit;
      justify-content: space-between;

      gap: 24px;

      padding-top: 10px;
      text-align: right;

      li {
        flex: 1 1 40%;
      }

      li p:first-of-type {
        font-size: 0.9rem;
      }

      li p:last-of-type {
        font-size: 0.8rem;
      }
    }
  }
`;

export const StyledAssets = styled.section`
  & > div {
    overflow: hidden;
    margin: 0 auto;

    align-items: flex-start;

    display: flex;
    flex-flow: row wrap;
    gap: 40px;

    & > * {
      flex-basis: 45%;
      flex-grow: 1;
      flex-shrink: 1;
    }

    .large {
      flex-basis: 100%;
    }
  }
`;
