import styled from "styled-components";
import { Scroll } from "@react-three/drei";

export const StyledNavigation = styled.nav`
  z-index: 99;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #FFF6E5;
  padding: 1rem 0;

  ul {
    width: 100%;
    max-width: var(--containerWidth);
    margin: 0 auto;
    
    display: flex;

    li.home {
      flex-grow: 1;
    }

    li.theme {
      margin-left: 2rem;
    }
  }
`;

export const StyledHtml = styled(Scroll)`
  width: 100%;
 
  display: flex;

  flex-flow: column nowrap;
  
  counter-reset: project;
`;

export const StyledThree = styled(Scroll)`
`;

export const StyledHero = styled.section`
  margin: 0 auto;
  padding: 0 5%;

  min-height: 100vh;

  display: flex;
  align-items: center;

  h2 {
    width: 50%;
  }
 `;

export const StyledProject = styled.section`
  counter-increment: project;
  display: flex;
  height: ${({ isLandscape }) => isLandscape ? "50vh" : "100vh"};

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
    border-top: 1px solid #FFF6E5;
    
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
    content: '';
    
    border-top: 1px solid #FFF6E5;
    width: 5%;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 20vh;
  background-color: #131313;
  border-top: 1px solid #FFF6E5;
`
