import styled from "styled-components";

export const StyledDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-end;
  gap: var(--gap);
  padding: var(--spacer);

  a {
    font-size: var(--display-small);
  }

  .meta {
    display: inherit;
    flex-flow: inherit;

    p {
      width: 100%;
    }
  }

  .divider {
    visibility: visible;
    border-bottom: 1.25px solid var(--primary);
    width: 40px;
  }

  @media only screen and (max-width: 900px) {
    .divider {
      visibility: hidden;
    }
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
