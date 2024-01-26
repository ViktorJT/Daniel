import styled from "styled-components";

export const StyledProject = styled.section`
  padding: var(--gap);
  display: flex;
  width: 100%;

  flex-flow: row wrap;
  flex: 1 1 100%;
  gap: var(--gap);

  .asset {
    display: block;
    flex: 0 1 56%;

    &:hover {
      cursor: pointer;
    }

    & > * {
      pointer-events: none;
    }
  }

  .details {
    display: inherit;
    flex-flow: column nowrap;
    align-self: flex-end;
    gap: var(--gap);

    a {
      color: var(--secondary);
      font-size: 2rem;
      line-height: 100%;

      &:hover {
        color: var(--secondary-shade);
      }
    }

    .meta {
      display: inherit;
      flex-flow: inherit;

      p {
        width: 100%;
        font-size: 0.8rem;
      }
    }

    .divider {
      border-bottom: 1px solid var(--secondary-shade);
      width: 40px;
    }
  }
`;
