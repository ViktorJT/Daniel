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
    border-top: 1px solid;
    border-color: var(--secondary);

    display: inherit;
    flex-flow: column-reverse nowrap;
    flex: 1 1 100%;

    .details {
      display: inherit;
      flex-flow: row wrap;
      flex: 1 1 auto;

      a {
        color: var(--secondary);
        text-decoration: none;
        font-size: 1.5rem;
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
      height: 100%;
      min-height: 300px;
      position: relative;
    }
  }

  ::after {
    content: "";
    border-top: solid 1px;
    border-color: var(--secondary);

    width: 5vw;
  }
`;
