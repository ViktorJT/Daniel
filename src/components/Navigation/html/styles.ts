import styled from "styled-components";

export const StyledNavigation = styled.nav`
  z-index: 99;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #fff6e5;
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
