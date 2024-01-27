import styled from "styled-components";

export const StyledDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-end;
  gap: var(--gap);
  padding: 0 var(--spacer);

  a {
    font-size: var(--display-small);
    line-height: 100%;
  }

  .meta {
    display: inherit;
    flex-flow: inherit;

    p {
      width: 100%;
    }
  }

  .divider {
    border-bottom: 1.25px solid var(--primary);
    width: 40px;
  }
`;

export const StyledAsset = styled.div`
  display: block;

  &:hover {
    cursor: pointer;
  }

  & > * {
    pointer-events: none;
  }
`;
