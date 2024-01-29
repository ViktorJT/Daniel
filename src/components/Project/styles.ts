import styled from "styled-components";
import Image from "next/legacy/image"; // @todo upgrade from legacy version

export const StyledDetails = styled.div`
  position: relative;
  padding-bottom: var(--gap);
  padding-right: var(--spacer);

  max-width: 560px;

  div {
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: end;

    gap: var(--gap);
    padding: var(--spacer);

    h2 {
      font-size: var(--subheading);
      flex: 1 1 560px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-accent);
      }
    }

    ul {
      flex: 1 1 33%;
      display: inherit;
      flex-flow: row wrap;
      justify-content: space-between;

      gap: var(--gap);

      padding-top: 10px;

      li {
        flex: 1 1 40%;
      }

      li p:first-of-type {
        letter-spacing: 1.5px;
        font-size: 11px;
        text-transform: uppercase;
        color: var(--primary-tint);
      }

      li p:last-of-type {
        font-size: 1rem;
      }
    }
  }

  &::after {
    visibility: visible;
    position: absolute;
    display: block;
    content: "";
    width: 40px;
    height: 1.25px;
    background-color: var(--primary-tint);
    bottom: 0;
    left: var(--spacer);
  }

  @media only screen and (max-width: 900px) {
    &::after {
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
