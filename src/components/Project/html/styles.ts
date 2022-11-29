import styled from "styled-components";
import ReactPlayer from "react-player";

export const StyledPlayerWrapper = styled.div`
  position: relative;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledProject = styled.section`
  counter-increment: project;
  display: flex;
  height: auto;
  width: 100%;

  ::before {
    content: counter(project, decimal-leading-zero);
    letter-spacing: 0.5vw;
    margin-top: -40px;
    text-align: left;
    padding-left: 5vw;

    width: 5vw;
  }

  > div {
    border-top: solid 1px red;
    display: flex;
    flex-direction: column-reverse;
      
    flex: 1 1 100%;

    gap: 40px;

    span {
      background-color: black !important;
      flex-grow: 1;
      max-height: 70vh;
    }

    margin-bottom: 5vh;

    .details {
      opacity 1;
      flex: 0 1 auto;
      max-height: none;

      display: flex;
      flex-direction: column;

      padding-right: 0;

      .title {
        flex: 1 1 100%;
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
    border-top: solid 1px red;

    width: 5vw;
  }

  @media only screen and (min-width: 1100px) {
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
      flex-direction: row;
      
      .title {
        flex: 1 1 100%;
        flex: 1 0 80%;
        align-items: center;
      }
      
      .details {
        padding-right: 3vw;
        opacity: 0;
        flex: 0 1 33%;
        max-height: 25vh;
      }
      
      span {
        opacity: 0;
      }
    }
    
  }
`;
