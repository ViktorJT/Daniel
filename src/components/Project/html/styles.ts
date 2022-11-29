import styled from "styled-components";

export const StyledProject = styled.section`
  counter-increment: project;
  display: flex;

  ::before {
    content: counter(project, decimal-leading-zero);
    letter-spacing: 0.5vw;
    margin-top: -40px;
    text-align: left;
    padding-left: 5vw;

    width: 5vw;
  }

  .wrapper {
    border-top: 1px solid var(--secondary);

    display: inherit;
    flex-flow: column-reverse nowrap;
    flex: 1 1 100%;

    .details {
      display: inherit;
      flex-flow: row wrap;
      flex: 1 1 auto;

      h2 {
        flex: 1 1 100%;
        padding: 40px 0;
      }

      p {
        flex: 0 1 50%;

        &:nth-of-type(even) {
          text-align: right;
        }

        &.labels {
          font-weight: bold;
        }
      }
    }

    .asset {
      position: relative;
    }
  }

  ::after {
    content: "";
    border-top: solid 1px var(--secondary);

    width: 5vw;
  }
`;
