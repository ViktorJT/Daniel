import styled from "styled-components";

import { StyledContactLink } from "./styles";

const ContactItem = ({ heading = false, type, value, label }: any) => {
  switch (type) {
    case "Email":
      return (
        <StyledContactLink href={`mailto:${value}`}>
          <p className="value">{value}</p>
        </StyledContactLink>
      );
    case "Phone":
      return (
        <StyledContactLink
          href={`tel:${value.trim().replace(/ /g, "").replace(/\+/g, "00")}}`}
        >
          <p className="value">{value}</p>
        </StyledContactLink>
      );
    case "Link":
      return (
        <StyledContactLink heading href={value} target="_blank">
          <p className="value">{label}</p>
        </StyledContactLink>
      );
    default:
      return <></>;
  }
};

export default ContactItem;
