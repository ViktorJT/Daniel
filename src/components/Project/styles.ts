import styled from "styled-components";
import Image from "next/legacy/image"; // @todo upgrade from legacy version

export const StyledDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-end;
  gap: var(--gap);
  padding: 0 var(--spacer);

  & > p {
    font-size: var(--display-small);
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-accent);
    }
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

export const StyledThumbnail = styled(Image)`
  transition: filter 0.3s ease;
  filter: grayscale(40%);

  &:hover {
    cursor: pointer;
    filter: grayscale(0%);
  }

  @media only screen and (max-width: 900px) {
    filter: grayscale(0%);
  }
`;
