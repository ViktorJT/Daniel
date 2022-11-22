import styled from "styled-components";

export const StyledThemeSwitcher = styled.button`
  background-color: black;
  border: none;
  padding: 8px 12px;
  width: 72px;
  border-radius: 24px;
  display: flex;
  color: #1c1c1c;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

export const StyledNavigation = styled.nav`
  z-index: 99;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid #fff6e5; */
  /* padding: 1rem 0; */
  height: 6vh;
  background-color: rgba(28, 28, 28, 0.3);
  backdrop-filter: blur(5px) saturate(90%);

  ul {
    width: 100%;
    max-width: var(--containerWidth);
    margin: 0 auto;

    display: flex;

    align-items: center;

    li a {
      text-decoration: none;
      color: #fff6e5;
    }

    li.home {
      flex-grow: 1;
    }

    li.theme {
      margin-left: 2rem;
    }
  }
`;
