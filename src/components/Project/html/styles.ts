import styled from "styled-components";

export const StyledProject = styled.section`
  counter-increment: project;
  display: flex;
  width: 100%;
  height: ${({ isLandscape }: { isLandscape: boolean | undefined }) =>
    isLandscape ? "50vh" : "100vh"};

  ::before {
    content: counter(project, decimal-leading-zero);
    letter-spacing: 0.5vw;
    margin-top: -10px;
    text-align: right;
    padding-right: 16px;

    width: 5vw;
  }

  > div {
    display: flex;

    flex: 1 1 100%;

    span {
      flex-grow: 1;
    }

    .details {
      opacity: 0;
      flex: 0 1 33%;
      max-height: 25vh;

      display: flex;
      flex-direction: column;

      padding-right: 3vw;

      .title {
        flex: 1 0 80%;
        align-items: center;
      }

      .headings,
      .labels,
      .title {
        display: flex;
        justify-content: space-between;
      }

      .labels {
        font-weight: bold;
      }

      .labels,
      .headings {
        p:last-of-type {
          text-align: right;
        }
      }
    }
  }

  ::after {
    content: "";

    width: 5vw;
  }
`;
