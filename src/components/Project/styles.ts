import styled from "styled-components";

export const StyledProject = styled.section`
  counter-increment: project;
  display: flex;

  ::before {
    content: counter(project, decimal-leading-zero);
    letter-spacing: 0.5vw;
    margin-top: -10px;
    text-align: left;
    padding-left: 1.25vw;

    width: 5vw;

    @media (max-width: 970px) {
      margin-top: -40px;
      padding-left: 5vw;
    }
  }

  .wrapper {
    border-top: 1px solid;
    border-color: var(--secondary);

    display: inherit;
    flex-flow: row wrap;
    flex: 1 1 100%;
    gap: var(--gap);

    .details {
      display: inherit;
      flex-flow: row wrap;
      flex: 1 0 400px;

      a {
        color: var(--secondary);
        text-decoration: none;
        font-size: 1.5rem;
        flex: 1 1 100%;
        padding: 40px 0;

        &:hover {
          color: var(--secondary-shade);
        }
      }

      p {
        flex: 1 0 50%;
        width: 100%;

        span {
          display: block;
          font-weight: bold;
        }
      }

      p:last-of-type {
        text-align: right;
      }
    }

    .asset {
      display: block;
      flex: 1 0 50%;
      transition: all 0.3s;
      filter: grayscale(0%);

      &:hover {
        cursor: pointer;
        filter: grayscale(80%);
      }

      & > * {
        pointer-events: none;
      }
    }
  }

  ::after {
    content: "";
    border-top: solid 1px;
    border-color: var(--secondary);

    width: 5vw;
  }
`;
