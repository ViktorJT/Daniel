import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  flex: 0 1 50%;
  justify-content: space-between;

  flex-flow: row wrap;

  a {
    font-size: 4rem;
  }

  ul {
    display: inherit;
    flex-flow: column nowrap;
    align-items: flex-end;
  }
`;
