import styled from "styled-components";

export const StyledAbout = styled.section`
  border-top: 1px solid var(--primary-tint);
  padding-top: 80px;
  display: flex;
  flex-flow: row nowrap;
  gap: var(--gap);
  min-height: 400px;

  @media only screen and (max-width: 1200px) {
    flex-flow: column nowrap;
  }
`;

export const StyledHeading = styled.div`
  display: inherit;
  flex-flow: column nowrap;
  padding: var(--spacer);

  gap: var(--gap);

  div > * {
    font-size: var(--body-large);
  }

  @media only screen and (max-width: 1200px) {
    align-items: flex-start;
    max-width: 640px;
  }
`;

export const StyledContacts = styled.ul`
  padding: var(--spacer);
  text-align: right;

  @media only screen and (max-width: 1200px) {
    text-align: left;
  }
`;
