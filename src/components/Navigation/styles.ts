import styled from "styled-components";

export const StyledLayout = styled.main`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`;

export const StyledThemeSwitcher = styled.button`
  background-color: var(--primary-tint);
  border: none;
  padding: 8px 12px;
  width: 72px;
  border-radius: 24px;
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  svg.active {
    opacity: 1;
  }
  
  svg {
    fill: var(--secondary);
    opacity: 0.3;
  }
`;

export const StyledNavigation = styled.nav`
  z-index: 99;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  height: 6vh;
  backdrop-filter: blur(3px) saturate(90%);

  ul {
    padding: 0 40px;
    width: 100%;
    max-width: var(--containerWidth);
    margin: 0 auto;

    display: flex;

    align-items: center;

    li a {
      text-decoration: none;
      color: var(--secondary);
    }

    li.home {
      flex-grow: 1;
    }

    li.theme {
      margin-left: 2rem;
    }
  }
`;
