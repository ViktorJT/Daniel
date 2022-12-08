import styled from "styled-components";

const Link = styled.a<any>`
  text-decoration: none;
  color: var(--secondary);

  p:last-of-type {
    font-weight: ${({ heading }) => heading ? "normal" : "bold"}
  }

  &:hover {
    color: var(--secondary-tint);
  }
`;

const ContactItem = ({ heading = false, type, value, label }: any) => {
  switch (type) {
    case "Email":
      return (
        <Link heading href={`mailto:${value}`}>
          {heading && <p className="heading">{label}</p>}
          <p className="value">{heading ? value : label}</p>
        </Link>
      );
    case "Phone":
      return (
        <Link
          heading
          href={`tel:${value.trim().replace(/ /g, "").replace(/\+/g, "00")}}`}
        >
          {heading && <p className="heading">{label}</p>}
          <p className="value">{heading ? value : label}</p>
        </Link>
      );
    case "Link":
      return (
        <Link heading href={value} target="_blank">
          <p className="value">{label}</p>
        </Link>
      );
    default:
      return <></>;
  }
};

export default ContactItem;
