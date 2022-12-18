import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  background-color: var(--primary-shade);
  border-top: 1px solid;
  border-color: var(--secondary);

  width: 100vw;

  margin-top: var(--spacer);

  div {
    width: 100%;
    max-width: var(--containerWidth);
    gap: 40px;
    padding: 40px;

    display: inherit;
    flex-flow: inherit;
    justify-content: inherit;
  }

  p {
    font-weight: bold;
  }

  ul {
    display: inherit;
    flex-flow: inherit;
    gap: 24px;
  }

  a {
    text-decoration: none;
    color: var(--secondary);
  }
`;
