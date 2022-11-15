import styled from "styled-components";

export const StyledProject = styled.section`
  counter-increment: project;
  display: flex;
  height: ${({ isLandscape }: {isLandscape: boolean | undefined}) => (isLandscape ? "50vh" : "100vh")};

  ::before {
    content: counter(project, decimal-leading-zero);
    letter-spacing: 0.5vw;
    margin-top: -10px;
    text-align: right;
    padding-right: 16px;

    width: 5%;
  }

  > div {
    display: flex;
    border-top: 1px solid #fff6e5;

    flex: 1 1 100%;

    span {
      flex-grow: 1;
    }

    .details {
      flex: 0 1 33%;

      display: flex;
      flex-flow: row wrap;
      align-content: flex-end;
      justify-content: space-between;
      padding-right: 16px;

      max-height: 50%;

      h3 {
        flex: 1 0 100%;
        margin-bottom: 16px;
      }

      p span {
        display: block;
        font-weight: bold;
      }

      p:last-of-type {
        text-align: right;
      }
    }
  }

  ::after {
    content: "";

    border-top: 1px solid #fff6e5;
    width: 5%;
  }
`;
