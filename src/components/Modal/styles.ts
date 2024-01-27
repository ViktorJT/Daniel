import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;

  & > div {
    background-color: var(--secondary-tint);
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 0px 64px rgba(0, 0, 0, 0.24);

    width: 80%;
  }

  @media only screen and (max-width: 900px) {
    & > div {
      width: 98%;
    }
  }
`;
