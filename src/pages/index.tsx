// TODO: remove orbit controls from CanvasLayout
// TODO: remove GUIs (lava & perf)

import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import CanvasLayout from "../components/layout/CanvasLayout";
import DomLayout from "../components/layout/DomLayout";

const StyledNavigation = styled.nav`
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

const StyledHero = styled.section`
  margin: 0 auto;
  max-width: var(--containerWidth);

  min-height: 100vh;

  display: flex;
  align-items: center;

  h2 {
    width: 50%;
  }
 `;

const StyledProject = styled.section`
  max-height: 100vh;
`

// dom components go here
const DOM = () => {
  return (
    <DomLayout>
      <StyledNavigation>
        <ul>
          <li className="home">
            <Link href="/">Daniel Arfwedson</Link>
          </li>
          <li className="about">
            <Link href="/about">About</Link>
          </li>
          <li className="theme">
            <button>click me</button>
          </li>
        </ul>
      </StyledNavigation>
      <StyledHero>
        <h2>
          Excepteur cupidatat Lorem laborum tempor dolore culpa dolor
          exercitation aute id
        </h2>
      </StyledHero>
      <StyledProject>
        <h3>lsfkjdslfkj</h3>
      </StyledProject>
    </DomLayout>
  );
};

// canvas components go here
const R3F = () => {
  return (
    <CanvasLayout>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </CanvasLayout>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
};

export default Home;
