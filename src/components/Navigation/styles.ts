import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: grid;
  padding: 0 var(--spacer);

  grid-template-columns: var(--layout);

  gap: var(--spacer);

  padding-bottom: var(--gap);

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;

    a {
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
