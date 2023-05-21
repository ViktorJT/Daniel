import styled from "styled-components";

export const StyledProject = styled.section`
  counter-increment: project;
  display: flex;

  ::before {
    content: counter(project, decimal-leading-zero);
    letter-spacing: 0.25vw;
    margin-top: -10px;
    text-align: right;
    padding-right: 1.25vw;

    width: 5vw;

    @media (max-width: 970px) {
      margin-top: -40px;
      padding-left: 2vw;
      padding-right: 0;
      width: 2vw;
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
      flex: 1 1 400px;
      align-items: flex-end;
      max-height: 640px;

      a {
        color: var(--secondary);
        text-decoration: none;
        font-size: 4rem;
        flex: 1 1 100%;
        padding: 64px 0;
        line-height: 100%;
        text-transform: none;

        &:hover {
          color: var(--secondary-shade);
        }

        @media (max-width: 970px) {
          word-break: break-word;
          padding: 0 0 40px 0;
          font-size: 2.5rem;
        }
      }

      p {
        flex: 1 0 50%;
        width: 100%;
        font-size: .8rem;

        span {
          display: block;
          font-size: 1rem;
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

    @media (max-width: 970px) {
      .asset {
        order: -1;
      }

      .details {
        align-items: flex-start;
      }
    }
  }

  ::after {
    content: "";
    border-top: solid 1px;
    border-color: var(--secondary);

    width: 5vw;

    @media (max-width: 970px) {
      width: 2vw;
    }
  }
`;
