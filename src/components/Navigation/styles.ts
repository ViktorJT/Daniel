import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  flex: 0 1 50%;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;

    li a {
      color: var(--secondary);
    }
  }
`;
