import styled from "styled-components";

export const StyledIntro = styled.section`
  max-width: 560px;

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
      font-size: var(--subheading);
    }

    ul {
      flex: 1 1 33%;
      display: inherit;
      flex-flow: row wrap;
      justify-content: space-between;

      gap: var(--gap);

      padding: 10px 0;

      li {
        flex: 1 1 40%;
      }

      li p {
        letter-spacing: 1.5px;
        font-size: 11px;
        text-transform: uppercase;
        color: var(--primary-tint);
      }

      li ul p {
        letter-spacing: 1px;
        font-size: 1rem;
        text-transform: none;
        color: var(--primary);
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

    @media only screen and (max-width: 450px) {
      & > * {
        flex-basis: 100%;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    grid-row: 2;
  }
`;
