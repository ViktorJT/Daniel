import styled from "styled-components";

export const StyledIntro = styled.section`
  div {
    position: sticky;
    top: var(--gap);

    display: flex;
    flex-flow: row wrap;

    gap: var(--gap);
    padding: 0 var(--spacer);

    justify-content: space-between;

    h2 {
      flex: 1 1 560px;
    }

    ul {
      flex: 1 1 33%;
      display: inherit;
      flex-flow: inherit;
      justify-content: space-between;

      gap: var(--gap);

      padding-top: 10px;

      li {
        flex: 1 1 40%;
      }

      li p:first-of-type {
        letter-spacing: 1.5px;
        font-size: 11px;
        text-transform: uppercase;
        color: var(--primary-tint);
      }

      li p:last-of-type {
        font-size: 1rem;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    grid-row: 1;

    h2 {
      visibility: hidden;
    }

    div {
      position: static;
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
    gap: var(--spacer);

    & > * {
      flex-basis: 45%;
      flex-grow: 1;
      flex-shrink: 1;
    }

    .large {
      flex-basis: 100%;
    }
  }

  @media only screen and (max-width: 900px) {
    grid-row: 2;
  }
`;
