import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: grid;

  grid-template-columns: var(--layout);

  gap: var(--spacer);

  padding: var(--gap) var(--spacer);

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: var(--gap);

    a {
      font-size: var(--heading);
    }

    .logo {
      font-size: var(--heading);
    }

    ul {
      display: inherit;
      flex-flow: column nowrap;
      align-items: flex-end;

      li:not(.active) a {
        color: var(--primary-tint);
      }
    }
  }
`;
